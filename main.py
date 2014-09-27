import webapp2
import os
from google.appengine.ext import webapp
from google.appengine.ext.webapp import util
from google.appengine.ext.webapp import template

class MainHandler(webapp.RequestHandler):
  def get (self):
    path = os.path.join (os.path.dirname (__file__), 'index.html')
    #self.response.headers ['Content-Type'] = 'text/html'
    self.response.out.write (template.render (path, {}))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
], debug=True)