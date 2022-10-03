export default function form1() {

    let designName = document.querySelector('.designName');
    let popUpForm = document.querySelector('.pop-up');

    let name = document.getElementById('title1').textContent;

    document.getElementById('button1').addEventListener('click', () => {
        popUpForm.showModal();
        designName.setAttribute('value', name);

    })

    document.getElementById('close-form').addEventListener('click', () =>{
        popUpForm.close();
    })
    
}