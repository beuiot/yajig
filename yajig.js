var YAJIG = {
    Gallery: function (options) {
        "use strict";

        var config = options || 
            {
                thumnailContainerClassName: "yajig-thumbs-img-container",
                fullscreenContainerClassName: "yajig-display"
            };

        var imageList = [];
        var thumbsList = [];
        var imageIndex = 0;
        var fullscreenElement;
        var fullscreenElementImg;

        initialize();

        document.addEventListener("mozfullscreenchange", function( event ) { onFullscreenChanged(); });
        document.addEventListener("webkitfullscreenchange", function( event ) { onFullscreenChanged(); });
        document.addEventListener("msfullscreenchange", function( event ) { onFullscreenChanged(); });
        document.addEventListener("fullscreenchange", function( event ) { onFullscreenChanged(); });
        
        document.onkeydown = onKeyDown;


        function initialize() {
            var thumbContainers = document.getElementsByClassName(config.thumnailContainerClassName);
            var i;
            for (i = 0; i < thumbContainers.length; i++) {
                var container = thumbContainers[i];
                var img = container.getElementsByTagName('img')[0];
                var a = container.getElementsByTagName('a')[0];

                imageList.push(a.href);
                thumbsList.push(img.src);

                a.href = "#";
                
                container.onclick = function(event) { onThumbClicked(event.target) };
            }

            fullscreenElement = document.getElementsByClassName(config.fullscreenContainerClassName)[0];
            fullscreenElementImg = fullscreenElement.getElementsByTagName("img")[0];

            console.log("Initialized gallery with prefix \"" + config.classPrefix + "\:. " + imageList.length + " images found.");
        }

        function next() {
            goTo (imageIndex + 1);
        }

        function previous() {
            goTo (imageIndex - 1);
        }

        function goTo(index)
        {
            imageIndex = Math.min(Math.max(0, index), imageList.length - 1);
            fullscreenElementImg.src = imageList[imageIndex];
        }

        function onThumbClicked(img) {
            goTo(thumbUrlToIndex(img.src));
            goFullScreen();
        }

        function thumbUrlToIndex(thumbUrl) {
            for (var i = 0; i < thumbsList.length; i++) {
                if (thumbsList[i] == thumbUrl)
                return i;
            }

            return 0;
        }

        function goFullScreen() {
            fullscreenElement.style = "";
            if (fullscreenElement.requestFullscreen) {
                fullscreenElement.requestFullscreen();
            }
            else if (fullscreenElement.mozRequestFullScreen) {
                fullscreenElement.mozRequestFullScreen();
            }
            else if (fullscreenElement.webkitRequestFullScreen) {
                fullscreenElement.webkitRequestFullScreen();
            }
            else if (fullscreenElement.msRequestFullscreen) {
                fullscreenElement.msRequestFullscreen();
            }
        }

        function isDocumentInFullScreenMode() {
            return ((document.fullScreenElement && document.fullScreenElement !== null) ||
                (!document.mozFullScreen && !document.webkitIsFullScreen && !document.msIsFullScreen));
        }

        function onFullscreenChanged() {
            if (isDocumentInFullScreenMode()) {
                fullscreenElement.style = "display: none;"
            }
        }

        function onKeyDown(e)
        {
            e = e || window.event;
            if (e.keyCode == '37')
                previous();
            else if (e.keyCode == '39')
                next();
        }

        return {
            next: function () {
                next();
            },
            previous: function() {
                previous();
            }
        };
    }
};

