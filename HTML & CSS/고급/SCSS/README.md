### SCSS 

    vscode 에선 Live Sass Compiler 설치 후 
    누르게 되면 css 생김 허나 컴퓨터는 scss를 못읽기 때문에 css 파일이 하나 더 생기는 이유임
    
1. 어려운 단어 기억해야할 땐 변수 문법을 씁니다.
2. 규칙적인 스타일 만들 때에도 변수 도움이 됩니다. 

### SASS / SCSS 차이점?? 

    .sass 파일은 sass 문법 사용가능한데 괄호를 안써도 된다.
  

<hr>
    
        .main-bg{
            font-size: 16px;
        }
        .main-bg button {
            color: $sidecolor;
        }

### ↑ 말고, `nesting 문법 ↓`

 - 관련 있는 class들 묶을 때 좋다.
 - 단, 두개이상 중첩은 하지말자. 복잡해짐.
 
 
        .main-bg {
            width: 100px;
            h4{
                font-size: $fontsize;
            }
            button{
                color: $sidecolor;
            }
        }
        
        
### `@extend` 문법

         중복을 없애려면 뼈와 살을 분리하는게 좋은 코드!! 
         
 - % 임시 클래스 특징 ? 단독으로 컴파일 되지않습니다.
 - class 전체를 복사해주는 @extend 문법
 - 중복된 스타일이 많으면 !! 
 - 1. 클래스로 묶는다 
 - 2. @extend로 필요할 때 복사하자 
