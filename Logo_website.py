import os

from flask import Flask, render_template, request, redirect, url_for
from flask_uploads import UploadSet, configure_uploads, IMAGES, patch_request_class

app = Flask(__name__)


app.config['UPLOADED_PHOTO_DEST'] = os.path.dirname(os.path.abspath(__file__))+"/uploads_flask/"
app.config['UPLOADED_PHOTO_ALLOW'] = IMAGES
photos = UploadSet('PHOTO')
configure_uploads(app, photos)
patch_request_class(app, 32 * 1024 * 1024)



@app.route('/<name>')
@app.route('/')
def index(name=None):
    if name==None:
        return render_template("logo.html",name="../static/img/gongge.jpg")
    else:
        print(photos.url(name))
        return render_template("logo.html",name=photos.url(name))



@app.route('/upload',methods=['POST', 'GET'])
def get_image():
    if request.method == 'POST' and 'photo' in request.files:
        filename = photos.save(request.files['photo'])
        return redirect(url_for('index', name=filename))
    return '上传失败'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
