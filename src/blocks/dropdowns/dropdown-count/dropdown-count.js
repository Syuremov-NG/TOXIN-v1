let dropdown_count__list = document.querySelector('.dropdown_count__list');
let dropdown_count__button = document.querySelector('.dropdown_count__button');

dropdown_count__button.onclick = function(){
    dropdown_count__list.classList.toggle('active');
    dropdown_count__button.classList.toggle('active');
}


let minus_frst = document.querySelector('.minus_frst');
let minus_scnd = document.querySelector('.minus_scnd');
let minus_thrd = document.querySelector('.minus_thrd');

let plus_frst = document.querySelector('.plus_frst');
let plus_scnd = document.querySelector('.plus_scnd');
let plus_thrd = document.querySelector('.plus_thrd');

let num_frst = document.querySelector('.num_frst');
let num_scnd = document.querySelector('.num_scnd');
let num_thrd = document.querySelector('.num_thrd');

let dropdown_count__input = document.querySelector('.dropdown_count__input');

let count_frst = 0;
let count_scnd = 0;
let count_thrd = 0;
let sum = 0;
let sumStr;
plus_frst.onclick = function(){
    if(count_frst === 0){
        minus_frst.classList.toggle('disabled');
    }
    count_frst++;
    sum++;
    sumStr = sum.toString; 
    num_frst.innerHTML = count_frst;
    if(((sum%100 > 10)&&(sum%100<20))||((sum%10 >= 5)&&(sum%10 <= 9))||(sum%10 == 0)){
        dropdown_count__input.innerHTML =  sum + ' гостей';
    }
    else if(sum%10===1){
        dropdown_count__input.innerHTML =  sum + ' гость';
    }
    else if((sum%10 === 2)||(sum%10 === 3)||(sum%10 === 4)){
        dropdown_count__input.innerHTML =  sum + ' гостя';
    }
}
minus_frst.onclick = function(){
    if(count_frst === 0){
        return;
    }
    if(count_frst !== 0){
        count_frst--;
        num_frst.innerHTML = count_frst;
        
        sum--;
        if(sum%10===1){
            dropdown_count__input.innerHTML =  sum + ' гость';
        }
        else if((sum%10 == 2)||(sum%10 == 3)||(sum%10 == 4)){
            dropdown_count__input.innerHTML =  sum + ' гостя';
        }
        else if((sum%10 == 5)||(sum%10 == 6)||(sum%10 == 7)||(sum%10 == 8)||(sum%10 == 9)||(sum%10 == 0)){
            dropdown_count__input.innerHTML =  sum + ' гостей';
        }
        if(count_frst === 0){
            minus_frst.classList.toggle('disabled');
            if(sum === 0){
                dropdown_count__input.innerHTML =  'Сколько гостей';
            }
        }
    } 
}
plus_scnd.onclick = function(){
    if(count_scnd === 0){
        minus_scnd.classList.toggle('disabled');
    }
    count_scnd++;
    sum++;
    sumStr = sum.toString; 
    num_scnd.innerHTML = count_scnd;
    if(((sum%100 > 10)&&(sum%100<20))||((sum%10 >= 5)&&(sum%10 <= 9))||(sum%10 == 0)){
        dropdown_count__input.innerHTML =  sum + ' гостей';
    }
    else if(sum%10===1){
        dropdown_count__input.innerHTML =  sum + ' гость';
    }
    else if((sum%10 === 2)||(sum%10 === 3)||(sum%10 === 4)){
        dropdown_count__input.innerHTML =  sum + ' гостя';
    }
}
minus_scnd.onclick = function(){
    if(count_scnd === 0){
        return;
    }
    if(count_scnd !== 0){
        count_scnd--;
        num_scnd.innerHTML = count_scnd;
        sum--;
        if(sum%10===1){
            dropdown_count__input.innerHTML =  sum + ' гость';
        }
        else if((sum%10 == 2)||(sum%10 == 3)||(sum%10 == 4)){
            dropdown_count__input.innerHTML =  sum + ' гостя';
        }
        else if((sum%10 == 5)||(sum%10 == 6)||(sum%10 == 7)||(sum%10 == 8)||(sum%10 == 9)||(sum%10 == 0)){
            dropdown_count__input.innerHTML =  sum + ' гостей';
        }
        if(count_scnd === 0){
            minus_scnd.classList.toggle('disabled');
            if(sum === 0){
                dropdown_count__input.innerHTML =  'Сколько гостей';
            }
        }
    } 
}
plus_thrd.onclick = function(){
    if(count_thrd === 0){
        minus_thrd.classList.toggle('disabled');
    }
    count_thrd++;
    sum++;
    sumStr = sum.toString; 
    num_thrd.innerHTML = count_thrd;
    if(((sum%100 > 10)&&(sum%100<20))||((sum%10 >= 5)&&(sum%10 <= 9))||(sum%10 == 0)){
        dropdown_count__input.innerHTML =  sum + ' гостей';
    }
    else if(sum%10===1){
        dropdown_count__input.innerHTML =  sum + ' гость';
    }
    else if((sum%10 === 2)||(sum%10 === 3)||(sum%10 === 4)){
        dropdown_count__input.innerHTML =  sum + ' гостя';
    }
}
minus_thrd.onclick = function(){
    if(count_thrd === 0){
        return;
    }
    if(count_thrd !== 0){
        count_thrd--;
        num_thrd.innerHTML = count_thrd;
        
        sum--;
        if(sum%10===1){
            dropdown_count__input.innerHTML =  sum + ' гость';
        }
        else if((sum%10 == 2)||(sum%10 == 3)||(sum%10 == 4)){
            dropdown_count__input.innerHTML =  sum + ' гостя';
        }
        else if((sum%10 == 5)||(sum%10 == 6)||(sum%10 == 7)||(sum%10 == 8)||(sum%10 == 9)||(sum%10 == 0)){
            dropdown_count__input.innerHTML =  sum + ' гостей';
        }
        if(count_thrd == 0){
            minus_thrd.classList.toggle('disabled');
            if(sum === 0){
                dropdown_count__input.innerHTML =  'Сколько гостей';
            }
        }
    } 
}

let accept_button = document.querySelector('.accept_button');
let clear_button = document.querySelector('.clear_button');

accept_button.onclick = function(){
    dropdown_count__list.classList.toggle('active');
    dropdown_count__button.classList.toggle('active');
}
clear_button.onclick = function(){
    if(count_frst !== 0){
        minus_frst.classList.toggle('disabled');
    }
    if(count_scnd !== 0){
        minus_scnd.classList.toggle('disabled');
    }
    if(count_thrd !== 0){
        minus_thrd.classList.toggle('disabled');
    }
    count_frst = 0;
    count_scnd = 0;
    count_thrd = 0;
    sum = 0;
    num_frst.innerHTML = count_frst;
    num_scnd.innerHTML = count_scnd;
    num_thrd.innerHTML = count_thrd;
    dropdown_count__input.innerHTML =  'Сколько гостей';
}