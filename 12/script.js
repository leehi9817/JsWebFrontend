var req = new XMLHttpRequest(); // 객체 생성
req.open("GET", "./json/image_list.json"); // GET 메소드로 경로의 파일 얻어오게 설정
req.onreadystatechange = function() { // onreadystatechange에 대한 callback function
    if (this.readyState == 4 ) { // 모든 데이터가 정상적으로 수신 되었을 때
        // console.log(this.response); // response 출력
        var data = JSON.parse(this.response);
        for (var i = 0; i < data.length; i++) {
            // div 태그 생성
            var div = document.createElement("div");
            // div에 image 클래스 속성 설정
            div.setAttribute("class", "image");
            // div에 onclick 이벤트 추가
            div.onclick = function() {
                // image-selected 클래스 속성 추가/제거
                this.classList.toggle("image-selected");
                
            }

            // 마우스를 올리고 있을 때 image-magnified 클래스 추가
            div.onmouseover = function() {
                var element = this;
                this.timerId = setTimeout(function() {
                    element.classList.add("image-magnified");
                }, 1000);
            }

            // 마우스를 내리면 image-magnified 클래스 삭제
            div.onmouseout = function() {
                clearTimeout(this.timerId);
                this.classList.remove("image-magnified");
            }

            var img = document.createElement("img");
            img.src = data[i];
            div.appendChild(img);
            document.body.appendChild(div);
        }
    }
}
req.send(); // request 전송

function selectAll(btn) {
    var images = document.getElementsByClassName("image"); // image 클래스를 가진 모든 태그 가져오기
    for(var i = 0; i < images.length; i++) {
        if (btn.value == "Unselect All") {
            images[i].classList.remove("image-selected");
        } else {
            images[i].classList.add("image-selected");
        }
    }

    if (btn.value == "Unselect All") {
        btn.value = "Select All";
    } else {
        btn.value = "Unselect All";
    }
}

function slideShow(btn) {
    var images = document.getElementsByClassName("image");
    var index = 0;
    images[index].classList.add("image-magnified");

    var intervalId = setInterval( function() {
        images[index].classList.remove("image-magnified");
        index++;
        if(index < images.length) {
            images[index].classList.add("image-magnified");
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}