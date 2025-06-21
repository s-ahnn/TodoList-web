function insertTodo(group) {
    //textContainer 속 요소들을 활용하기 위해 배열화 (children은 기본 속성)
    const Elements = Array.from(allSpace.children);
    //각 요소들을 돌며 체크박스가 true인지 확인
    for(const i in Elements){
        const checkbox = Elements[i].querySelector('input[type="checkbox');
        //체크박스가 true라면 그 바로 앞에 group (새 할 일) 삽입
        if (checkbox && checkbox.checked) {
            allSpace.insertBefore(group, Elements[i]);
            return;
        }
    }
    //체크박스가 전부 false라면 textContainer 맨 끝에 group(새 할 일) 삽입
    allSpace.appendChild(group);
}

//이미 textContainer에 있는 group을 그냥 삽입하려고 하면 작동 X, 따라서 group 이동 시에는 삭제 후 삽입 필수
function moveTodo(group) {
    group.remove();
    insertTodo(group);
}

const addButton = document.getElementById('add');
const allSpace = document.getElementById('all');

addButton.addEventListener('click', () => {
    if (document.getElementById('todoInput').value) {
        const group = document.createElement('div');

        //할 일 수행 여부 체크박스 생성
        const Check = document.createElement('input');
        Check.type = 'checkbox';
        Check.classList.add('check');

        //할 일 입력칸 생성
        let HaveTo = document.getElementById('todoInput');
        const Todo = document.createElement('input');
        Todo.type = 'text';
        Todo.value = HaveTo.value;
        HaveTo.value = "";
        Todo.readOnly = true;
        Todo.classList.add('todo');
        
        //할 일 수정 버튼 생성
        const modify = document.createElement('button');
        const MbuttonText = document.createTextNode('수정');
        modify.classList.add('modify');
        modify.appendChild(MbuttonText);

        //할 일 삭제 버튼 생성
        const Del = document.createElement('button');
        const DbuttonText = document.createTextNode('삭제');
        Del.classList.add('delete');
        Del.appendChild(DbuttonText);

        //해당 일을 수행해야 하는 날짜 설정
        let whenD = document.getElementById('dateInput');
        const day = document.createElement('input');
        day.type = 'date';
        day.value = whenD.value;
        whenD.value = "";
        day.readOnly = true
        day.classList.add('day');
        
        //해당 일을 수행해야 하는 시간 설정
        let whenT = document.getElementById('timeInput');
        const time = document.createElement('input');
        time.type = 'time';
        time.value = whenT.value;
        whenT.value = "";
        time.readOnly = true
        time.classList.add('time');

        //div안에 체크박스, 입력칸, 삭제 버튼, 날짜, 시간을 넣음
        group.appendChild(Check);
        group.appendChild(Todo);
        group.appendChild(modify)
        group.appendChild(Del);
        group.appendChild(day);
        group.appendChild(time);

        //div에 넣어놓은 요소들을 TextContainer에 띄움
        allSpace.appendChild(group);

        //체크박스가 활성화되었을 때 일어나는 이벤트
        Check.addEventListener('change', () => {
            if (Check.checked) {
                //체크박스 활성화 시 취소선 생성, 글씨색 회색으로 변경
                Todo.style.textDecoration = 'line-through';
                Todo.style.color = 'grey';
                //할 일 목록 맨 아래에 추가 (이동)
                allSpace.appendChild(group);
            }
            else {
                //체크박스 비활성화 시 취소선 삭제, 글씨색 검정으로 변경
                Todo.style.textDecoration = 'none';
                Todo.style.color = 'black';
                //다시 완료되지 않은 할 일과 완료된 할 일 사이로 이동 
                moveTodo(group);
            }
        })

        //힐 일 수정 버튼을 눌렀을 때 일어나는 이벤트
        modify.addEventListener('click', () => {
            Todo.readOnly = false;
            day.readOnly = false;
            time.readOnly = false;

            const done = document.createElement('button');
            const doneText = document.createTextNode('완료');
            done.classList.add('done');
            done.appendChild(doneText);

            group.appendChild(done);

            done.addEventListener('click', () => {
                done.remove();

                Todo.readOnly = true;
                day.readOnly = true;
                time.readOnly = true;
            })
        })

        //할 일 삭제 버튼을 눌렀을 때 일어나는 이벤트
        Del.addEventListener('click', () => {
            //해당 div(체크박스, 입력칸, 삭제 버튼, 날짜, 시간) 삭제
            group.remove();
        })

        //새로 추가한 할 일을 어디에 삽입할지 결정
        insertTodo(group);
    }
})
