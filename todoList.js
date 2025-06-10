// 추가 버튼과 할 일이 나타날 공간 저장
const addButton = document.getElementById('add');
const textContainer = document.getElementById('textContainer');

//추가 버튼을 눌렀을 때 일어나는 이벤트
addButton.addEventListener('click', () => {
    const group = document.createElement('div')

    //할 일 수행 여부 체크박스 생성
    const Check = document.createElement('input');
    Check.type = 'checkbox';
    Check.classList.add('check');

    //할 일 입력칸 생성
    const Todo = document.createElement('input');
    Todo.type = 'text';
    Todo.placeholder = '할 일을 입력하세요.';
    Todo.classList.add('todo');

    //할 일 삭제 버튼 생성
    const Del = document.createElement('button');
    const buttonText = document.createTextNode('X');
    Del.classList.add('delete');
    Del.appendChild(buttonText);

    //해당 일을 수행해야 하는 날짜 설정
    const day = document.createElement('input');
    day.type = 'date';
    day.classList.add('day');
    
    //해당 일을 수행해야 하는 시간 설정
    const time = document.createElement('input');
    time.type = 'time';
    time.classList.add('time');

    //div안에 체크박스, 입력칸, 삭제 버튼, 날짜, 시간을 넣음
    group.appendChild(Check);
    group.appendChild(Todo);
    group.appendChild(Del);
    group.appendChild(day);
    group.appendChild(time);
    //할 일들이 한 줄에 하나씩 있게 하기 위한 줄바꿈
    group.appendChild(document.createElement('br'));
    
    //div에 넣어놓은 요소들을 TextContainer에 띄움
    textContainer.appendChild(group);

    //체크박스가 활성화되었을 때 일어나는 이벤트
    Check.addEventListener('change', () => {
        if (Check.checked) {
            //체크박스 활성화 시 취소선 생성, 글씨색 회색으로 변경
            Todo.style.textDecoration = 'line-through';
            Todo.style.color = 'grey';
            //할 일 목록 맨 아래에 추가 (이동)
            textContainer.appendChild(group);
        }
    })

    //할 일 삭제 버튼을 눌렀을 때 일어나는 이벤트
    Del.addEventListener('click', () => {
        //해당 div(체크박스, 입력칸, 삭제 버튼, 날짜, 시간) 삭제
        group.remove();
    })
})