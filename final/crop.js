window.onload = function () {
  'use strict';

  var Cropper = window.Cropper;
  var URL = window.URL || window.webkitURL;
  var container = document.querySelector('.img-container');
  var image = container.getElementsByTagName('img').item(0);
  var download = document.getElementById('download');
  var actions = document.getElementById('actions');
  var ra1=document.getElementById("ra1");
  var ra2=document.getElementById("ra2");
  var ra3=document.getElementById("ra3");
  var ra4=document.getElementById("ra4");
  var ra5=document.getElementById("ra5");
  var ra6=document.getElementById("ra6");

  var options;
  var cropper;
ra1.addEventListener("click", e =>
{

console.log("h");
   options = {
aspectRatio: 1 / 1,
preview: '.img-preview',
ready: function (e) {
console.log(e.type);
},
cropstart: function (e) {
console.log(e.type, e.detail.action);
},
cropmove: function (e) {
console.log(e.type, e.detail.action);
},
cropend: function (e) {
console.log(e.type, e.detail.action);
},
crop: function (e) {
var data = e.detail;

console.log(e.type);
},
zoom: function (e) {
console.log(e.type, e.detail.ratio);
}
};
cropper.destroy();
      cropper = new Cropper(image, options);
 

});
ra2.addEventListener("click", e =>
{

console.log("h");
   options = {
aspectRatio: 3.5/4.5,
preview: '.img-preview',
ready: function (e) {
console.log(e.type);
},
cropstart: function (e) {
console.log(e.type, e.detail.action);
},
cropmove: function (e) {
console.log(e.type, e.detail.action);
},
cropend: function (e) {
console.log(e.type, e.detail.action);
},
crop: function (e) {
var data = e.detail;

console.log(e.type);
},
zoom: function (e) {
console.log(e.type, e.detail.ratio);
}
};
cropper.destroy();
      cropper = new Cropper(image, options);
 

});
ra3.addEventListener("click", e =>
{

console.log("h");
   options = {
aspectRatio: 4 / 3,
preview: '.img-preview',
ready: function (e) {
console.log(e.type);
},
cropstart: function (e) {
console.log(e.type, e.detail.action);
},
cropmove: function (e) {
console.log(e.type, e.detail.action);
},
cropend: function (e) {
console.log(e.type, e.detail.action);
},
crop: function (e) {
var data = e.detail;

console.log(e.type);
},
zoom: function (e) {
console.log(e.type, e.detail.ratio);
}
};
cropper.destroy();
      cropper = new Cropper(image, options);
 

});
ra4.addEventListener("click", e =>
{

console.log("h");
   options = {
aspectRatio: 3/ 2,
preview: '.img-preview',
ready: function (e) {
console.log(e.type);
},
cropstart: function (e) {
console.log(e.type, e.detail.action);
},
cropmove: function (e) {
console.log(e.type, e.detail.action);
},
cropend: function (e) {
console.log(e.type, e.detail.action);
},
crop: function (e) {
var data = e.detail;

console.log(e.type);
},
zoom: function (e) {
console.log(e.type, e.detail.ratio);
}
};
cropper.destroy();
      cropper = new Cropper(image, options);
 

});
ra5.addEventListener("click", e =>
{

console.log("h");
   options = {
aspectRatio: 16/ 9,
preview: '.img-preview',
ready: function (e) {
console.log(e.type);
},
cropstart: function (e) {
console.log(e.type, e.detail.action);
},
cropmove: function (e) {
console.log(e.type, e.detail.action);
},
cropend: function (e) {
console.log(e.type, e.detail.action);
},
crop: function (e) {
var data = e.detail;

console.log(e.type);
},
zoom: function (e) {
console.log(e.type, e.detail.ratio);
}
};
cropper.destroy();
      cropper = new Cropper(image, options);
 

});
ra6.addEventListener("click", e =>
{

console.log("h");
   options = {
aspectRatio: 5 / 4,
preview: '.img-preview',
ready: function (e) {
console.log(e.type);
},
cropstart: function (e) {
console.log(e.type, e.detail.action);
},
cropmove: function (e) {
console.log(e.type, e.detail.action);
},
cropend: function (e) {
console.log(e.type, e.detail.action);
},
crop: function (e) {
var data = e.detail;

console.log(e.type);
},
zoom: function (e) {
console.log(e.type, e.detail.ratio);
}
};
cropper.destroy();
      cropper = new Cropper(image, options);
 

});

  options = {
    aspectRatio: 16 / 9,
    preview: '.img-preview',
    ready: function (e) {
      console.log(e.type);
    },
    cropstart: function (e) {
      console.log(e.type, e.detail.action);
    },
    cropmove: function (e) {
      console.log(e.type, e.detail.action);
    },
    cropend: function (e) {
      console.log(e.type, e.detail.action);
    },
    crop: function (e) {
      var data = e.detail;

      console.log(e.type);
    },
    zoom: function (e) {
      console.log(e.type, e.detail.ratio);
    }
  };
  var cropper = new Cropper(image, options);
  var originalImageURL = image.src;
  var uploadedImageType = 'image/jpeg';
  var uploadedImageName = 'cropped.jpg';
  var uploadedImageURL;
  $('[data-toggle="tooltip"]').tooltip();


  if (!document.createElement('canvas').getContext) {
    $('button[data-method="getCroppedCanvas"]').prop('disabled', true);
  }

  if (typeof document.createElement('cropper').style.transition === 'undefined') {
    $('button[data-method="rotate"]').prop('disabled', true);
    $('button[data-method="scale"]').prop('disabled', true);
  }

  if (typeof download.download === 'undefined') {
    download.className += ' disabled';
    download.title = 'Your browser does not support download';
  }
  actions.querySelector('.docs-toggles').onchange = function (event) {
    var e = event || window.event;
    var target = e.target || e.srcElement;
    var cropBoxData;
    var canvasData;
    var isCheckbox;
    var isRadio;

    if (!cropper) {
      return;
    }

    if (target.tagName.toLowerCase() === 'label') {
      target = target.querySelector('input');
    }

    isCheckbox = target.type === 'checkbox';
    isRadio = target.type === 'radio';

    if (isCheckbox || isRadio) {
      if (isCheckbox) {
        options[target.name] = target.checked;
        cropBoxData = cropper.getCropBoxData();
        canvasData = cropper.getCanvasData();

        options.ready = function () {
          console.log('ready');
          cropper.setCropBoxData(cropBoxData).setCanvasData(canvasData);
        };
      } else {
        options[target.name] = target.value;
        options.ready = function () {
          console.log('ready');
        };
      }

      cropper.destroy();
      cropper = new Cropper(image, options);
    }
  };

  actions.querySelector('.docs-buttons').onclick = function (event) {
    var e = event || window.event;
    var target = e.target || e.srcElement;
    var cropped;
    var result;
    var input;
    var data;

    if (!cropper) {
      return;
    }

    while (target !== this) {
      if (target.getAttribute('data-method')) {
        break;
      }

      target = target.parentNode;
    }

    if (target === this || target.disabled || target.className.indexOf('disabled') > -1) {
      return;
    }

    data = {
      method: target.getAttribute('data-method'),
      target: target.getAttribute('data-target'),
      option: target.getAttribute('data-option') || undefined,
      secondOption: target.getAttribute('data-second-option') || undefined
    };

    cropped = cropper.cropped;

    if (data.method) {
      if (typeof data.target !== 'undefined') {
        input = document.querySelector(data.target);

        if (!target.hasAttribute('data-option') && data.target && input) {
          try {
            data.option = JSON.parse(input.value);
          } catch (e) {
            console.log(e.message);
          }
        }
      }

      switch (data.method) {
        case 'rotate':
          if (cropped && options.viewMode > 0) {
            cropper.clear();
          }

          break;

case 'scaleX':
        case 'scaleY':
          target.setAttribute('data-option', -data.option);
          break;

        case 'getCroppedCanvas':
          try {
            data.option = JSON.parse(data.option);
          } catch (e) {
            console.log(e.message);
          }

          if (uploadedImageType === 'image/jpeg') {
            if (!data.option) {
              data.option = {};
            }

            data.option.fillColor = '#fff';
          }

          break;
      }

      result = cropper[data.method](data.option, data.secondOption);

      switch (data.method) {
        case 'rotate':
          if (cropped && options.viewMode > 0) {
            cropper.crop();
          }

          break;

        case 'getCroppedCanvas':
          if (result) {
            // Bootstrap's Modal
            $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);

            if (!download.disabled) {
              download.download = uploadedImageName;
              download.href = result.toDataURL(uploadedImageType);
            }
          }

          break;

        case 'destroy':
          cropper = null;

          if (uploadedImageURL) {
            URL.revokeObjectURL(uploadedImageURL);
            uploadedImageURL = '';
            image.src = originalImageURL;
          }

          break;
      }

      if (typeof result === 'object' && result !== cropper && input) {
        try {
          input.value = JSON.stringify(result);
        } catch (e) {
          console.log(e.message);
        }
      }
    }
  };

  document.body.onkeydown = function (event) {
    var e = event || window.event;

    if (e.target !== this || !cropper || this.scrollTop > 300) {
      return;
    }

    switch (e.keyCode) {
      case 37:
        e.preventDefault();
        cropper.move(-1, 0);
        break;

      case 38:
        e.preventDefault();
        cropper.move(0, -1);
        break;

      case 39:
        e.preventDefault();
        cropper.move(1, 0);
        break;

      case 40:
        e.preventDefault();
        cropper.move(0, 1);
        break;
    }
  };

  var inputImage = document.getElementById('inputImage');

  if (URL) {
    inputImage.onchange = function () {
      var files = this.files;
      var file;
              console.log("test");
      if (cropper && files && files.length) {
        file = files[0];
    
        if (/^image\/\w+/.test(file.type)) {
          uploadedImageType = file.type;
          uploadedImageName = file.name;
         document.getElementById("div21").setAttribute("style","display:none");
		 document.getElementById("div32").setAttribute("style","display:block");
		 document.getElementById("div23").setAttribute("style","display:block");
          if (uploadedImageURL) {
            URL.revokeObjectURL(uploadedImageURL);
          }

          image.src = uploadedImageURL = URL.createObjectURL(file);
          cropper.destroy();
          cropper = new Cropper(image, options);
          inputImage.value = null;
        } else {
          window.alert('Please choose an image file.');
        }
      }
    };
  } else {
    inputImage.disabled = true;
    inputImage.parentNode.className += ' disabled';
  }
};