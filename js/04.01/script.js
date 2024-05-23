
const elem1 = document.getElementById('news');
const valid_html_string = '    <h3>Lorem ipsum dolor sit amet.</h3>' +
'<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>'+ '<p>Lorem, ipsum.</p>';
/*
// const inner_html = elem1.innerHTML;
// console.log(inner_html);
*/

//-------------------innerHTML--------------
// 
// elem1.innerHTML = valid_html_string;//замена html элементов


//-------------------outerHTML---------------
// const outer_html = elem1.outerHTML;
// elem1.outerHTML = valid_html_string;


//-------------------innerText--------------
// const inner_text = elem1.innerText;
// elem1.innerText = 'pro';
// console.log(inner_text);


//-------------------textContent-------------
// const text_content = elem1.textContent;
// elem1.textContent = valid_html_string;
// console.log(text_content);



//  const btn = document.getElementById('continue');
//  btn.onclick = () => {
//     alert('hello');
//  }

//  btn.ondblclick = () => {
//     document.querySelector('#news h1').innerText = 'hello';
//  }


// btn.oncontextmenu = () => {
//     document.querySelector('#news p').innerText = 'good eveining';
//     return false;
// }


function changeText(elementId, text) {
    document.querySelector('h1').textContent = 'Новый текст';
    document.getElementById(elementId).innerText = text;
  }
  
  changeText('desc', 'hello world');

  
//   document.querySelector('button').addEventListener('click', function() {
//     document.querySelector('h1').textContent = 'Новый текст';
//   });

























// let str1 = 'xxx';
// let str2 = 'yyy';
// let txt  = `aaa + ${str1}`; 

    