### Intersection observer (비동기)     
기본적으로 브라우저 뷰포트(Viewport)와 설정한 요소(Element)의 교차점을 관찰하며,     
요소가 뷰포트에 포함되는지 포함되지 않는지, 더 쉽게는 사용자 화면에 지금 보이는 요소인지 아닌지를 구별하는 기능을 제공한다.

* new IntersectionObserver()
```js
const options = {
  root: document.querySelector('.contents'),
  rootMargin: '0px',
  threshold: 1.0
}

const io = new IntersectionObserver(callback, options)
io.observe(element)
```

------

#### options 관찰자 옵션
* root
대상의 가시성을 확인하기 위한 뷰포트 요소 (대상의 조상)     
지정되지 않았거나 null인 경우 브라우저 뷰포트로 기본 설정

* rootMargin
css margin 속성
교차점을 계산하기 전에 root요소의 각 측면을 증가, 감소시키는 역활을 한다.
모든 0으로 기본설정

* thershold
관찰자의 콜백을 실행해야하는 대상의 가시성 비율을 나타내는 단일번호 또는 숫자
기본값은 0 (픽셀 1개라도 보이면 콜백 실행한다는 의미)
1.0값은 모든 픽셀이 모일 때까지 임계값(?)이 통과된 것으로 간주되지 않음을 의미

* callback
```js
const io = new IntersectionObserver((entries, observer) => {}, options)
io.observe(element)
```
관찰한 대상(target)이 등록되거나 가시성에 변화가 생기면 관찰자는 콜백을 실행 콜백 인수는 2개 (entries, observer)    

* entries
entries는 IntersectionObserverEntry 인스턴스의 배열     
1. boundingClientRect : 관찰 대상의 사각형 정보
2. intersectionRect: 관찰 대상의 교차한 영역 정보
3. intersectionRatio: 관찰 대상의 교차한 영역 백분율 (intersectionRect 영역에서 boundingClientRect영역까지 비율, Number)
4. rootBounds: 지정한 루트 요소의 사각형 정보
5. target: 관찰 대상 요소(element)
6. time: 변경이 발생한 시간 정보
7. isIntersecting: 관찰 대상이 루트요소와 교차 상태로 들어가거나(true) 교차 상태에서 나가는지 (false) 여부를 나타내는 값 (Boolean)
```js
const io = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    console.log(entry) // entry is 'IntersectionObserverEntry'
  })
}, options)

io.observe(element)
```

* observer
callback이 실행되는 해당 인스턴스를 참조한다.

------

#### Methods
* observer()
대상 요소의 관찰을 시작합니다.

* unobserver()
대상 요소의 관찰을 중지합니다.
관찰을 중지할 하나의 대상 요소를 인수로 지정해야 합니다.     
단, IntersectionObserver 인스턴스가 관찰하고 있지 않은 대상 요소가 인수로 지정된 경우 아무런 동작도 하지 않습니다.     

* disconnect()
IntersectionObserver 인스턴스가 관찰하는 모든 요소의 관찰을 중지한다.

* takeRecords()
IntersectionObserverEntry 객체의 배열을 반환 (일반적인 상황에서 이 메서드를 호출할 필요가 없습니다)

------
#### document event handler DOMContentLoaded     
이벤트는 스타일시트, 이미지 및 서브프레임 로드가 완료될 때까지 기다리지 않고 초기 HTML 문서가 완전히 로드 및 구문 분석되었을 때 실행된다.

#### window.getComputedStyle (window.getComputedStyle(element[, pseudoElt ]))     
인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 회신합니다. 이 속성값들은, 해당 요소에 대하여 활성 스타일시트와 속성값에 대한 기본 연산이 모두 반영된 결과값입니다.  개별 CSS속성 값은 객체를 통해 제공되는 API 또는 CSS 속성 이름을 사용해서 간단히 색인화해서 액세스할 수 있습니다.



