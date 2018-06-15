import numpy
import os

class NcsResult:
  def __init__(self):
    self.top = []

  def __str__(self):
    text = ""
    for cat in self.top:
      text += cat[0] + ' (' + '{0:.2f}'.format(cat[1]*100) + '%) '
    return text

  def add(self,category,probability):
    self.top.append((category,probability))

class NcsNetwork:
  """ Class representing a graph
  """

  def __init__(self,directory):
    self.network_dir = directory
    #Load preprocessing data
    with open(os.path.join(self.network_dir,'stat.txt'), 'r') as f:
        self.mean = f.readline().split()
        self.std = f.readline().split()
        for i in range(3):
                self.mean[i] = 255 * float(self.mean[i])
                self.std[i] = 1 / (255 * float(self.std[i]))
    #Load categories
    self.categories = []
    with open(os.path.join(self.network_dir,'categories.txt'), 'r') as f:
        for line in f:
                cat = line.split('\n')[0]
                if cat != 'classes':
                        self.categories.append(cat)
        f.close()
        # print('Number of categories:', len(self.categories))
    #Load image size
    with open(os.path.join(self.network_dir,'inputsize.txt'), 'r') as f:
       self.reqsize = int(f.readline().split('\n')[0])

  def rawinputformat(self):
    """ returns a tuple of (width, height, format)
    describing the input format before preprocessing
    """
    return (self.reqsize, self.reqsize,"RGB")

  def get_graph_binary(self):
    """ returns the graph binary
    """
    with open(os.path.join(self.network_dir,"graph"), mode='rb') as file:
      graph = file.read()
    return graph

  def preprocess(self, data):
    """ preprocess a video frame
    input - in the format specified by rawinputformat() method
    output - in the format required by the graph
    """
    (w,h,f) = self.rawinputformat()
    dt = numpy.dtype(numpy.uint8)
    nb = numpy.frombuffer(data,dt,-1,0)
    actual_stream_width = (w&1)+w # hack, rather get this from the app sink
    if(actual_stream_width != self.reqsize):
      nb = nb.reshape(h,actual_stream_width,3)
      nb = nb[0:h,0:w,0:3] # crop to network input size
    else:
      nb = nb.reshape((h,w,3))
    img = nb.astype('float32')
    #Preprocess image
    for i in range(3):
        img[:,:,i] = (img[:,:,i] - self.mean[i]) * self.std[i]
    return img.astype(numpy.float16)

  def postprocess(self,graph_output):
    """ postprocess an inference result
    graph_output - in the format produced by the graph
    return value - in a human readable format
    """
    order = graph_output.argsort()
    last = len(self.categories)-1
    res = NcsResult();
    for i in range(min(5, last+1)):
        res.add( self.categories[order[last-i]], ( graph_output[order[last-i]] ) )
    return res

