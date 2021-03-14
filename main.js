const TEXTAREA = document.querySelector('.textarea');
const BOLD = document.querySelector('.bolded');
let bold_id = 0;
let checkPassword = false;
BOLD.addEventListener('click', () => {
    bold_id++
    if (bold_id % 2 !== 0) {
        TEXTAREA.style.fontWeight = 'bold';
    } else {
        TEXTAREA.style.fontWeight = '';
    }
});
let i_id = 0;
const I_FONT = document.querySelector('.i-font');
I_FONT.addEventListener('click', function () {
    i_id++;
    if (i_id % 2 !== 0) {
        TEXTAREA.style.fontStyle = 'italic';
    } else {
        TEXTAREA.style.fontStyle = '';
    }
});
const U_FONT = document.querySelector('.u-font');
let u_id = 0;
U_FONT.addEventListener('click', () => {
    u_id++;
    if (u_id % 2 !== 0) {
        TEXTAREA.style.textDecoration = "UnderLine";
    } else {
        TEXTAREA.style.textDecoration = '';
    }
})

const S_FONT = document.querySelector('.s-font');
let s_id = 0;
S_FONT.addEventListener('click', () => {
    s_id++;
    if (s_id % 2 !== 0) {
        TEXTAREA.style.textDecoration = "line-through";
    } else {
        TEXTAREA.style.textDecoration = '';
    }
})

const LEFT_FONT = document.querySelector('.left-font');
LEFT_FONT.addEventListener('click', function () {
    TEXTAREA.style.textAlign = 'left';
})
const CENTER_FONT = document.querySelector('.centre-font');
CENTER_FONT.addEventListener('click', function () {
    TEXTAREA.style.textAlign = 'center';
})
const RIGHT_FONT = document.querySelector('.right-font');
RIGHT_FONT.addEventListener('click', function () {
    TEXTAREA.style.textAlign = 'right';
})

const COLOR_CLICK = document.querySelectorAll('.block-color');
const FONT_COLOR = document.querySelector('.font-color');
for (let i = 0; i < COLOR_CLICK.length; i++) {
    COLOR_CLICK[i].addEventListener('click', () => {
        TEXTAREA.style.color = COLOR_CLICK[i].style.backgroundColor;
    })
}

const BGCOLOR_CLICK = document.querySelectorAll('.block-bgcolor');
for (let i = 0; i < BGCOLOR_CLICK.length; i++) {
    BGCOLOR_CLICK[i].addEventListener('click', () => {
        TEXTAREA.style.backgroundImage = '';
        TEXTAREA.style.backgroundColor = BGCOLOR_CLICK[i].style.backgroundColor;
    })
}

const BGIMAGE_CLICK = document.querySelectorAll('.block-bgimage');
for (let i = 0; i < BGIMAGE_CLICK.length; i++) {
    BGIMAGE_CLICK[i].addEventListener('click', () => {
        TEXTAREA.style.backgroundColor = '';
        TEXTAREA.style.backgroundImage = BGIMAGE_CLICK[i].style.backgroundImage;
    })
}

let ColorsBoolean = true;
let ImageBoolean;
let ChangeBoolean;

const IMAGE_BG = document.querySelectorAll('.bg-settings');
for (let i = 0; i < IMAGE_BG.length; i++) {
    IMAGE_BG[i].addEventListener('click', (event) => {
        IMAGE_BG[i].style.borderBottom = 'none';
        IMAGE_BG[i].style.borderRight = '1px solid lightgray';
        IMAGE_BG[i].style.borderLeft = '1px solid lightgray';
        if (event.target.className == 'colors-bg bg-settings') {
            ColorsBoolean = true;
            ImageBoolean = false;
            ChangeBoolean = false;
            IMAGE_BG[1].style.borderBottom = '1px solid lightgray';
            IMAGE_BG[2].style.borderRight = 'none';
            IMAGE_BG[1].style.borderRight = 'none';
            IMAGE_BG[2].style.borderBottom = '1px solid lightgray';
            IMAGE_BG[1].style.borderLeft = 'none';
            IMAGE_BG[2].style.borderLeft = 'none';
            IMAGE_BG[0].style.color = 'black';
            IMAGE_BG[1].style.color = '#549edf';
            IMAGE_BG[2].style.color = '#549edf';
            document.querySelector('.color-hide').style.display = 'flex';
            document.querySelector('.image-hide').style.display = 'none';
            document.querySelector('.choose-hide').style.display = 'none';
        } else if (event.target.className == 'image-bg bg-settings') {
            ColorsBoolean = false;
            ImageBoolean = true;
            ChangeBoolean = false;
            IMAGE_BG[0].style.borderBottom = '1px solid lightgray';
            IMAGE_BG[2].style.borderRight = 'none';
            IMAGE_BG[2].style.borderBottom = '1px solid lightgray';
            IMAGE_BG[0].style.borderLeft = 'none';
            IMAGE_BG[0].style.borderRight = 'none';
            IMAGE_BG[2].style.borderLeft = 'none';
            IMAGE_BG[0].style.color = '#549edf';
            IMAGE_BG[1].style.color = 'black';
            IMAGE_BG[2].style.color = '#549edf';
            document.querySelector('.color-hide').style.display = 'none';
            document.querySelector('.image-hide').style.display = 'flex';
            document.querySelector('.choose-hide').style.display = 'none';
        } else if (event.target.className == 'files-bg bg-settings') {
            ColorsBoolean = false;
            ImageBoolean = false;
            ChangeBoolean = true;
            IMAGE_BG[0].style.borderBottom = '1px solid lightgray';
            IMAGE_BG[1].style.borderBottom = '1px solid lightgray';
            IMAGE_BG[1].style.borderRight = 'none';
            IMAGE_BG[1].style.borderLeft = 'none';
            IMAGE_BG[0].style.borderLeft = 'none';
            IMAGE_BG[0].style.borderRight = 'none';
            IMAGE_BG[0].style.color = '#549edf';
            IMAGE_BG[1].style.color = '#549edf';
            IMAGE_BG[2].style.color = 'black';
            document.querySelector('.color-hide').style.display = 'none';
            document.querySelector('.image-hide').style.display = 'none';
            document.querySelector('.choose-hide').style.display = 'block';
        }

    })
    IMAGE_BG[0].addEventListener('mouseover', () => {
        IMAGE_BG[0].style.borderTop = "1px solid #dee2e6";
        IMAGE_BG[0].style.borderRight = "1px solid #dee2e6";
    })
    IMAGE_BG[0].addEventListener('mouseout', () => {
        if (ColorsBoolean != true) {
            IMAGE_BG[0].style.border = 'none';
            IMAGE_BG[0].style.borderBottom = '1px solid lightgray';
        }
    })
    IMAGE_BG[1].addEventListener('mouseover', () => {
        IMAGE_BG[1].style.borderTop = "1px solid #dee2e6";
        IMAGE_BG[1].style.borderRight = "1px solid #dee2e6";
        IMAGE_BG[1].style.borderLeft = "1px solid #dee2e6";
    })
    IMAGE_BG[1].addEventListener('mouseout', () => {
        if (ImageBoolean != true) {
            IMAGE_BG[1].style.border = 'none';
            IMAGE_BG[1].style.borderBottom = '1px solid lightgray';
        }
    })
    IMAGE_BG[2].addEventListener('mouseover', () => {
        IMAGE_BG[2].style.borderTop = "1px solid #dee2e6";
        IMAGE_BG[2].style.borderRight = "1px solid #dee2e6";
        IMAGE_BG[2].style.borderLeft = "1px solid #dee2e6";
    })
    IMAGE_BG[2].addEventListener('mouseout', () => {
        if (ChangeBoolean != true) {
            IMAGE_BG[2].style.border = 'none';
            IMAGE_BG[2].style.borderBottom = '1px solid lightgray';
        }
    })
}




const CHOOSE_FILE = document.querySelector('.custom-file-input');
CHOOSE_FILE.addEventListener('change', (e) => {
    TEXTAREA.style.backgroundColor = '';
    let urlImage = URL.createObjectURL(e.target.files[0]);
    TEXTAREA.style.backgroundImage = `url(${urlImage})`;
    CHOOSE_FILE.value = '';
})


const dropSize = document.querySelectorAll('.dropbtnsize')
for (let i = 0; i < dropSize.length; i++) {
    dropSize[i].addEventListener('click', () => {
        TEXTAREA.style.fontSize = dropSize[i].style.fontSize;
    })
}

const dropFamaly = document.querySelectorAll('.dropFamily')
for (let i = 0; i < dropFamaly.length; i++) {
    dropFamaly[i].addEventListener('click', () => {
        TEXTAREA.style.fontFamily = dropFamaly[i].style.fontFamily;
    })
}

const FIRST_BLOCK_MENU = document.querySelector('.first-menu-block');
FIRST_BLOCK_MENU.addEventListener('click', () => {
    if (checkPassword) {
        document.querySelector('.flex-box').style.display = 'none';
        document.querySelector('.hide-table').style.display = 'flex';
        TEXTAREA.style.display = 'none';
        document.querySelector('textarea').style.display = 'block';
        document.querySelector('textarea').value = TEXTAREA.innerHTML;
    }
})

const SAVE = document.querySelector('.save-table');
SAVE.addEventListener('click', () => {
    document.querySelector('.flex-box').style.display = 'flex';
    document.querySelector('.hide-table').style.display = 'none';
    TEXTAREA.style.display = 'block';
    document.querySelector('textarea').style.display = 'none';
    TEXTAREA.innerHTML = document.querySelector('textarea').value;
});
let table = document.createElement('table');;
let borderstyle;
let bordercolor;
const STYLE_SELECT = document.querySelector('.style-select');
STYLE_SELECT.addEventListener('click', function () {
    for (let i = 0; i < STYLE_SELECT.length; i++) {
        if (STYLE_SELECT.options[i].selected) {
            table.style.borderStyle = STYLE_SELECT.options[i].innerHTML;
            borderstyle = STYLE_SELECT.options[i].innerHTML;
        }
    }
})
const COLOR_SEL = document.querySelector('.color-select');
COLOR_SEL.addEventListener('click', function () {
    for (let i = 0; i < document.querySelector('.custom-select').length; i++) {
        if (this.options[i].selected) {
            table.style.borderColor = this.options[i].innerHTML;
            bordercolor = this.options[i].innerHTML;
        }
    }
})

const BTN_CREATE_TABLE = document.querySelector('.btn-success');
const WIDTH_BORDER = document.querySelector('.width-border');
const CHECK_INP = document.querySelectorAll('.check-input');
let check_table_red = document.querySelector('.check-table-red');
let check_bad = false;
BTN_CREATE_TABLE.addEventListener('click', () => {
    for (let j = 0; j < CHECK_INP.length; j++) {
        if (CHECK_INP[0].value == '') {
            CHECK_INP[0].className = 'form-control is-invalid';
            CHECK_INP[0].classList.add('counttr');
            CHECK_INP[0].classList.add('check-input');
            check_table_red.innerHTML = 'invalid value';
        } else {
            CHECK_INP[0].className = 'form-control';
            CHECK_INP[0].classList.add('counttr');
            CHECK_INP[0].classList.add('check-input');
        }
        if (CHECK_INP[1].value == '') {
            CHECK_INP[1].classList.add('check-input');
            CHECK_INP[1].className = 'form-control is-invalid';
            CHECK_INP[1].classList.add('width-td');
            check_table_red.innerHTML = 'invalid value';
        } else {
            CHECK_INP[1].className = 'form-control';
            CHECK_INP[1].classList.add('check-input');
            CHECK_INP[1].classList.add('width-td');
        }
        if (CHECK_INP[2].value == '') {
            CHECK_INP[2].className = 'form-control is-invalid';
            CHECK_INP[2].classList.add('width-border');
            CHECK_INP[2].classList.add('check-input');
            check_table_red.innerHTML = 'invalid value';
        } else {
            CHECK_INP[2].className = 'form-control';
            CHECK_INP[2].classList.add('width-border');
            CHECK_INP[2].classList.add('check-input');
        }
        if (CHECK_INP[3].value == '') {
            CHECK_INP[3].className = 'form-control is-invalid';
            CHECK_INP[3].classList.add('count-td');
            CHECK_INP[3].classList.add('check-input');
            check_table_red.innerHTML = 'invalid value';
        } else {
            CHECK_INP[3].className = 'form-control';
            CHECK_INP[3].classList.add('count-td');
            CHECK_INP[3].classList.add('check-input');
        }
        if (CHECK_INP[4].value == '') {
            CHECK_INP[4].className = 'form-control is-invalid';
            CHECK_INP[4].classList.add('height-td');
            CHECK_INP[4].classList.add('check-input');
            check_table_red.innerHTML = 'invalid value';
        } else {
            CHECK_INP[4].className = 'form-control';
            CHECK_INP[4].classList.add('height-td');
            CHECK_INP[4].classList.add('check-input');
        }
        if (STYLE_SELECT.options[0].selected == true) {
            STYLE_SELECT.className = 'custom-select is-invalid style-select';
            check_table_red.innerHTML = 'invalid value';
        } else {
            STYLE_SELECT.className = 'custom-select style-select';
        }

        if (COLOR_SEL.options[0].selected == true) {
            COLOR_SEL.className = 'custom-select is-invalid color-select';
            check_table_red.innerHTML = 'invalid value';
        } else {
            COLOR_SEL.className = 'custom-select color-select';
        }
        if (CHECK_INP[0].value.length > 0 && CHECK_INP[1].value.length > 0 && CHECK_INP[2].value.length > 0 && CHECK_INP[3].value.length > 0 && CHECK_INP[4].value.length > 0 &&
            STYLE_SELECT.options[0].selected == false && COLOR_SEL.options[0].selected == false) {
            check_bad = true;
        }
    }

    if (check_bad) {
        table.style.borderWidth = WIDTH_BORDER.value + 'px';
        for (let i = 0; i < document.querySelector('.counttr').value; i++) {
            let tr = document.createElement('tr');
            for (let k = 0; k < document.querySelector('.count-td').value; k++) {
                let td = document.createElement('td');
                tr.appendChild(td)
                td.innerHTML = 'TD';
                td.style.width = document.querySelector('.width-td').value + 'px';
                td.style.height = document.querySelector('.height-td').value + 'px';
                td.style.borderWidth = WIDTH_BORDER.value + 'px';
                td.style.borderStyle = borderstyle;
                td.style.borderColor = bordercolor;
            }
            table.appendChild(tr);
        }
        document.querySelector('textarea').value += table.outerHTML;
        check_bad = false;
        check_table_red.innerHTML = '';
    }




})

const RESET_TABLE = document.querySelector('.reset-table');
RESET_TABLE.addEventListener('click', () => {
    document.querySelector('.width-td').value = '';
    document.querySelector('.height-td').value = '';
    document.querySelector('.counttr').value = '';
    document.querySelector('.count-td').value = '';
    WIDTH_BORDER.value = '';
    STYLE_SELECT.options[0].selected = true;
    COLOR_SEL.options[0].selected = true;
    STYLE_SELECT.className = 'custom-select style-select';
    COLOR_SEL.className = 'custom-select color-select';
    CHECK_INP[0].className = 'form-control';
    CHECK_INP[0].classList.add('counttr');
    CHECK_INP[0].classList.add('check-input');
    CHECK_INP[1].className = 'form-control';
    CHECK_INP[1].classList.add('check-input');
    CHECK_INP[1].classList.add('width-td');
    CHECK_INP[2].className = 'form-control';
    CHECK_INP[2].classList.add('width-border');
    CHECK_INP[2].classList.add('check-input');
    CHECK_INP[3].className = 'form-control';
    CHECK_INP[3].classList.add('count-td');
    CHECK_INP[3].classList.add('check-input');
    CHECK_INP[4].className = 'form-control';
    CHECK_INP[4].classList.add('height-td');
    CHECK_INP[4].classList.add('check-input');
    check_table_red.innerHTML = '';
});

const ol_list = document.createElement('ol');
const FORM_OL = document.forms.F_OL;
const INP_LI = FORM_OL.elements.input_li_ol;
const SEL_OL = FORM_OL.elements.select_ol;
document.querySelector('.create-ol').addEventListener('click', function () {
    if (INP_LI.value == '') {
        document.querySelector('.invalid-value-ol').innerHTML = 'invalid value';
        INP_LI.className = 'form-control is-invalid';
    } else {
        INP_LI.className = 'form-control';
    }
    if (SEL_OL.options[0].selected == true) {
        SEL_OL.className = 'custom-select is-invalid';
        document.querySelector('.invalid-value-ol').innerHTML = 'invalid value';
    } else {
        SEL_OL.className = 'custom-select';
    }
    if (INP_LI.value.length > 0 && SEL_OL.options[0].selected == false) {
        SEL_OL.style.borderColor = 'lightgray';
        INP_LI.style.borderColor = 'lightgray';
        document.querySelector('.invalid-value-ol').innerHTML = '';
        for (let i = 0; i < INP_LI.value; i++) {
            let li_list = document.createElement('li');
            li_list.style.listStyleType = SEL_OL.value;
            li_list.innerHTML = 'item' + ' ' + (i + 1);
            ol_list.appendChild(li_list);
        }
        document.querySelector('textarea').value += ol_list.outerHTML
    }

});
document.querySelector('.reset-ol').addEventListener('click', () => {
    SEL_OL.options[0].selected = true;
    INP_LI.value = '';
    document.querySelector('.invalid-value-ol').innerHTML = '';
    INP_LI.className = 'form-control';
    SEL_OL.className = 'custom-select';
});

const ul_list = document.createElement('ul');
const FORM_UL = document.forms.F_UL;
const INP_LI_UL = FORM_UL.elements.input_li_ul;
const SEL_UL = FORM_UL.elements.select_ul;
document.querySelector('.create-ul').addEventListener('click', function () {
    if (INP_LI_UL.value == '') {
        document.querySelector('.invalid-value-ul').innerHTML = 'invalid value';
        INP_LI_UL.className = 'form-control is-invalid';
    } else {
        INP_LI_UL.className = 'form-control';
    }
    if (SEL_UL.options[0].selected == true) {
        document.querySelector('.invalid-value-ul').innerHTML = 'invalid value';
        SEL_UL.className = 'custom-select is-invalid';
    } else {
        SEL_UL.className = 'custom-select';
    }
    if (INP_LI_UL.value.length > 0 && SEL_UL.options[0].selected == false) {
        document.querySelector('.invalid-value-ul').innerHTML = '';
        for (let i = 0; i < INP_LI_UL.value; i++) {
            let li_list = document.createElement('li');
            li_list.style.listStyleType = SEL_UL.value;
            li_list.innerHTML = 'item' + ' ' + (i + 1);
            ul_list.appendChild(li_list);
        }
        document.querySelector('textarea').value += ul_list.outerHTML
    }
});
document.querySelector('.reset-ul').addEventListener('click', () => {
    SEL_UL.options[0].selected = true;
    INP_LI_UL.value = '';
    document.querySelector('.invalid-value-ul').innerHTML = '';
    INP_LI_UL.className = 'form-control';
    SEL_UL.className = 'custom-select';
});

const FORM_SING = document.forms.F_SING;
FORM_SING.btn_sing_in.addEventListener('click', () => {

    if (FORM_SING.login.value == 'admin') {
        document.querySelector('.bar-login').innerHTML = '';
        FORM_SING.login.className = 'form-control';
    } else {
        document.querySelector('.bar-login').innerHTML = 'Please check your login or password';
        FORM_SING.login.className = 'form-control is-invalid';
    }
    if (FORM_SING.password.value == 'admin') {
        FORM_SING.password.className = 'form-control';
    } else {
        document.querySelector('.bar-login').innerHTML = 'Please check your login or password';
        FORM_SING.password.className = 'form-control is-invalid';
    }
    if (FORM_SING.login.value == '') {
        document.querySelector('.bar-login').innerHTML = 'value is empty';
        FORM_SING.login.className = 'form-control is-invalid';
    }
    if (FORM_SING.password.value == '') {
        document.querySelector('.bar-login').innerHTML = 'value is empty';
        FORM_SING.password.className = 'form-control is-invalid';
    }
    if (FORM_SING.login.value == 'admin' && FORM_SING.password.value == 'admin') {
        checkPassword = true;
        document.querySelector('.settings-hide').className = 'settings-hide btn btn-outline-light border-rd hide-hover';
        document.querySelector('.first-menu-block').style.backgroundColor = 'white';
        document.querySelector('.first-menu-block').addEventListener('mouseover', () => {
            document.querySelector('.first-menu-block').style.backgroundColor = 'rgb(221, 220, 220)';
            document.querySelector('.first-menu-block').addEventListener('mouseout', function () {
                document.querySelector('.first-menu-block').style.backgroundColor = 'white';
            });
        });
        document.querySelector('.fivth-menu-block').style.display = 'none';
        document.querySelector('.unlocked-menu-block').style.display = 'block';
        FORM_SING.btn_sing_in.setAttribute('data-dismiss', 'modal');
        FORM_SING.login.value = '';
        FORM_SING.password.value = '';
    }
});

function MouseDownBtn() {
    this.style.backgroundColor = 'rgb(223, 223, 223)';
}

function MouseOutBtn() {
    this.style.backgroundColor = 'white';
}

function MouseOverBtn() {
    this.style.backgroundColor = 'rgb(223, 223, 223)';
}
const settingsHide = document.querySelector('.settings-hide');
const ULOCKED_BTN = document.querySelector('.unlocked-menu-block');
ULOCKED_BTN.addEventListener('click', () => {
    FORM_SING.btn_sing_in.setAttribute('data-dismiss', '');
    document.querySelector('.sing-out-btn').setAttribute('data-dismiss', 'modal');
    document.querySelector('.sing-out-btn').addEventListener('click', () => {
        document.querySelector('.settings-hide').className = 'settings-hide';
        document.querySelector('.fivth-menu-block').style.display = 'block';
        document.querySelector('.unlocked-menu-block').style.display = 'none';
        checkPassword = false;
        settingsHide.className = 'settings-hide';
        settingsHide.style.backgroundColor = 'rgb(209, 207, 207)';
        settingsHide.removeEventListener('mousedown', MouseDownBtn);
        settingsHide.removeEventListener('mouseout', MouseOutBtn);
        settingsHide.removeEventListener('mouseover', MouseOverBtn);
        document.querySelector('.first-menu-block').style.backgroundColor = 'rgb(165, 164, 164)';
        document.querySelector('.first-menu-block').addEventListener('mouseover', () => {
            document.querySelector('.first-menu-block').style.backgroundColor = '';
            document.querySelector('.first-menu-block').addEventListener('mouseout', function () {
                document.querySelector('.first-menu-block').style.backgroundColor = '';
            });
        });
    })

})
const DropAll = document.querySelectorAll('.dropdown-menu');
DropAll[0].addEventListener('mouseover', () => {
    document.querySelector('.font-size').style.backgroundColor = 'rgb(223, 223, 223)';
})
DropAll[0].addEventListener('mouseout', () => {
    document.querySelector('.font-size').style.backgroundColor = 'white';
})

DropAll[1].addEventListener('mouseover', () => {
    document.querySelector('.font-heigth').style.backgroundColor = 'rgb(223, 223, 223)';
})
DropAll[1].addEventListener('mouseout', () => {
    document.querySelector('.font-heigth').style.backgroundColor = 'white';
})

function focusStyle() {
    let oleg = document.querySelectorAll('.btn-outline-light');
    for (let i = 0; i < oleg.length; i++) {
        oleg[i].addEventListener('mousedown', MouseDownBtn);
        oleg[i].addEventListener('mouseout', MouseOutBtn);
        oleg[i].addEventListener('mouseover', MouseOverBtn);
    }
}
focusStyle();