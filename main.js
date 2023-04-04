// open and close the pushchair
var div = document.getElementById('puschair');
function openBtn() {
    div.style.display = "block";
}
function closeBtn() {
    div.style.display = "none";
}
const pr1 = document.querySelector("#present1main");
const pr2 = document.querySelector("#present2main");
const pr3 = document.querySelector("#present3main");
const pr4 = document.querySelector("#present4main");
const pr5 = document.querySelector("#present5main");

function openPr1() {
    pr1.style.display = "flex";
}
function closePr1() {
    pr1.style.display = "none";

}
function openPr2() {
    pr2.style.display = "flex";
}
function closePr2() {
    pr2.style.display = "none";

} function openPr3() {
    pr3.style.display = "flex";
}
function closePr3() {
    pr3.style.display = "none";

} function openPr4() {
    pr4.style.display = "flex";
}
function closePr4() {
    pr4.style.display = "none";

} function openPr5() {
    pr5.style.display = "flex";
}
function closePr5() {
    pr5.style.display = "none";

}

// open and close the pushchair

// scoll display

const button = document.querySelector('.button');
const element = document.querySelector('#present');
button.addEventListener('click', () => {
    element.scrollIntoView({ behavior: 'smooth' });
});

// scoll display
// present


const div1present = document.querySelector("#present1main .bigimg");
const img11 = document.querySelector("#present1main .img1");
const img21 = document.querySelector("#present1main .img2");
const img31 = document.querySelector("#present1main .img3");
const img41 = document.querySelector("#present1main .img4");
const div2present = document.querySelector("#present2main .bigimg");
const img12 = document.querySelector("#present2main .img1");
const img22 = document.querySelector("#present2main .img2");
const img32 = document.querySelector("#present2main .img3");
const img42 = document.querySelector("#present2main .img4");
const div3present = document.querySelector("#present3main .bigimg");
const img13 = document.querySelector("#present3main .img1");
const img23 = document.querySelector("#present3main .img2");
const img33 = document.querySelector("#present3main .img3");
const img43 = document.querySelector("#present3main .img4");
const div4present = document.querySelector("#present4main .bigimg");
const img14 = document.querySelector("#present4main .img1");
const img24 = document.querySelector("#present4main .img2");
const img34 = document.querySelector("#present4main .img3");
const img44 = document.querySelector("#present4main .img4");
const div5present = document.querySelector("#present5main .bigimg");
const img15 = document.querySelector("#present5main .img1");
const img25 = document.querySelector("#present5main .img2");
const img35 = document.querySelector("#present5main .img3");
const img45 = document.querySelector("#present5main .img4");

function clickImg11() {
    div1present.style.backgroundImage = " url('../../img/tablet-img-test1.png')";
    img11.style.borderBottom = "2px solid #000";
    img21.style.borderBottom = "none";
    img31.style.borderBottom = "none";
    img41.style.borderBottom = "none";

}; function clickImg21() {
    div1present.style.backgroundImage = "url('../../img/mx-anywhere-3-product-gallery-graphite-top.png')";
    img21.style.borderBottom = "2px solid #000";
    img11.style.borderBottom = "none";
    img31.style.borderBottom = "none";
    img41.style.borderBottom = "none";

}; function clickImg31() {
    div1present.style.backgroundImage = "url('../../img/mx-keys-mini-top-graphite-us.png')";
    img31.style.borderBottom = "2px solid #000";
    img41.style.borderBottom = "none";
    img11.style.borderBottom = "none";
    img21.style.borderBottom = "none";
}; function clickImg41() {
    div1present.style.backgroundImage = "url('../../img/mx-keys-mini-business-keyboard-gallery-us-int-pale-gray-1.png')";
    img41.style.borderBottom = "2px solid #000";
    img11.style.borderBottom = "none";
    img21.style.borderBottom = "none";
    img31.style.borderBottom = "none";
};
function clickImg12() {
    div2present.style.backgroundImage = " url('../../img/folio-touch-air-gallery-1.png')";
    img12.style.borderBottom = "2px solid #000";
    img22.style.borderBottom = "none";
    img32.style.borderBottom = "none";
    img42.style.borderBottom = "none";

}; function clickImg22() {
    div2present.style.backgroundImage = "url('../../img/folio-touch-air-gallery-4.png') ";
    img22.style.borderBottom = "2px solid #000";
    img12.style.borderBottom = "none";
    img32.style.borderBottom = "none";
    img42.style.borderBottom = "none";

}; function clickImg32() {
    div2present.style.backgroundImage = "url('../../img/slim_folio_pro_for_ipad_pro_4_ae210b7d693c4bfaae68ec7e942bdf96_grande.png')";
    img32.style.borderBottom = "2px solid #000";
    img42.style.borderBottom = "none";
    img12.style.borderBottom = "none";
    img22.style.borderBottom = "none";
}; function clickImg42() {
    div2present.style.backgroundImage = "url('../../img/folio-touch-air-gallery-5.png')";
    img42.style.borderBottom = "2px solid #000";
    img12.style.borderBottom = "none";
    img22.style.borderBottom = "none";
    img32.style.borderBottom = "none";
};
function clickImg13() {
    div3present.style.backgroundImage = "url('../../img/brio-gallery-2.png')";
    img13.style.borderBottom = "2px solid #000";
    img23.style.borderBottom = "none";
    img33.style.borderBottom = "none";
    img43.style.borderBottom = "none";

}; function clickImg23() {
    div3present.style.backgroundImage = "url('../../img/brio-gallery-3.png')  ";
    img23.style.borderBottom = "2px solid #000";
    img13.style.borderBottom = "none";
    img33.style.borderBottom = "none";
    img43.style.borderBottom = "none";

}; function clickImg33() {
    div3present.style.backgroundImage = "url('../../img/4k-pro-gallery-1.png')";
    img33.style.borderBottom = "2px solid #000";
    img43.style.borderBottom = "none";
    img13.style.borderBottom = "none";
    img23.style.borderBottom = "none";
}; function clickImg43() {
    div3present.style.backgroundImage = "url('../../img/briopictograms__2__grande.png')";
    img43.style.borderBottom = "2px solid #000";
    img13.style.borderBottom = "none";
    img23.style.borderBottom = "none";
    img33.style.borderBottom = "none";
};
function clickImg14() {
    div4present.style.backgroundImage = "url('../../img/28583-zone-vibe-100-gallery-white-4.png')";
    img14.style.borderBottom = "2px solid #000";
    img24.style.borderBottom = "none";
    img34.style.borderBottom = "none";
    img44.style.borderBottom = "none";

}; function clickImg24() {
    div4present.style.backgroundImage = "url('../../img/28583-zone-vibe-100-gallery-white-5.png')";
    img24.style.borderBottom = "2px solid #000";
    img14.style.borderBottom = "none";
    img34.style.borderBottom = "none";
    img44.style.borderBottom = "none";

}; function clickImg34() {
    div4present.style.backgroundImage = " url('../../img/28583-zone-vibe-100-gallery-white-6.png')";
    img34.style.borderBottom = "2px solid #000";
    img44.style.borderBottom = "none";
    img14.style.borderBottom = "none";
    img24.style.borderBottom = "none";
}; function clickImg44() {
    div4present.style.backgroundImage = " url('../../img/zone-vibe-100-gallery-white-1.png')";
    img44.style.borderBottom = "2px solid #000";
    img14.style.borderBottom = "none";
    img24.style.borderBottom = "none";
    img34.style.borderBottom = "none";
};
function clickImg15() {
    div5present.style.backgroundImage = "url('../../img/9481_pop_keys_gallery_blast_4.png')";
    img15.style.borderBottom = "2px solid #000";
    img25.style.borderBottom = "none";
    img35.style.borderBottom = "none";
    img45.style.borderBottom = "none";

}; function clickImg25() {
    div5present.style.backgroundImage = "url('../../img/ban-phim-khong-day-logitech-pop-keys-longbinh.com.vn7.png')";
    img25.style.borderBottom = "2px solid #000";
    img15.style.borderBottom = "none";
    img35.style.borderBottom = "none";
    img45.style.borderBottom = "none";

}; function clickImg35() {
    div5present.style.backgroundImage = "url('../../img/08496126__3__9799524b7b7e448795bca6d859585ab4_d2c0eb828660421183b6b5553d980ff9_master.png')";
    img35.style.borderBottom = "2px solid #000";
    img45.style.borderBottom = "none";
    img15.style.borderBottom = "none";
    img25.style.borderBottom = "none";
}; function clickImg45() {
    div5present.style.backgroundImage = "url('../../img/pop-keys-gallery-daydream-6.png')";
    img45.style.borderBottom = "2px solid #000";
    img15.style.borderBottom = "none";
    img25.style.borderBottom = "none";
    img35.style.borderBottom = "none";
};
// present

// Mua ngay js 

// san pham 1
var em = document.querySelector('#sanpham .thongbao');
var price = document.querySelector('.price');
var btnAdd = document.querySelectorAll("#bestsaler .giohang");
var cart = document.querySelector('#sanpham');
var countBtn = 0;
var plusAdd = document.querySelectorAll('#bestsaler .plus');


for (const item1 of btnAdd) {
    item1.onclick = function () {
        addProduct1(this);
    };
}
for (const plusBtn of plusAdd) {
    plusBtn.addEventListener('click', function () {
        let item1 = this.parentElement.parentElement.parentElement.querySelector('.giohang');
        addProduct1(item1);
    });
}
function addProduct1(item1) {
    em.style.display = 'none';
    var bo1 = item1.parentElement.parentElement.parentElement.parentElement.querySelector(".product").cloneNode(true);
    var deleteBtn = bo1.querySelector(".delete");
    deleteBtn.addEventListener("click", function () {
        bo1.remove();
        countBtn--;
        updateCount();
        tinhTien();
        if (countBtn == 0) {
            em.style.display = 'block';
        }
    });
    cart.appendChild(bo1);
    countBtn++;
    updateCount();
    tinhTien();
}
function updateCount() {
    var soluongsp = document.querySelector(".soluongsp");
    soluongsp.textContent = countBtn;
}


function tinhTien() {
    let bao = cart.getElementsByClassName('product');
    var tong = 0;
    for (const item of bao) {
        let td = item.getElementsByClassName('cost')[0];
        let gia = parseInt(td.innerText);
        tong += gia * 1;
    }
    price.innerHTML = "$" + " " + tong;
}


// Mua ngay js
// Thiết lập các giá trị ban đầu cho các thuộc tính của các thẻ a trong thanh navigation
var initialStyles = {
    color: "white",
    backgroundColor: "transparent"
};

window.addEventListener("scroll", function () {
    var navbar = document.querySelector("#nav");
    var links = document.querySelectorAll("#nav a");

    // Nếu thanh navigation nằm trên đầu trang

    if (window.pageYOffset < 100) {
        navbar.style.backgroundColor = "transparent";
        navbar.style.opacity = "1";
        links.forEach(link => {
            link.style.color = "black";
            link.style.backgroundColor = "transparent";
            link.removeEventListener("mouseenter", null);
            link.removeEventListener("mouseleave", null);
            link.addEventListener("mouseenter", function () {
                link.style.color = "black";
                link.style.backgroundColor = "White";
                return link;
            });
            link.addEventListener("mouseleave", function () {
                link.style.color = "white";
                link.style.backgroundColor = "transparent";
            });
        });

    }



    // Nếu thanh navigation được cuộn qua phía trên
    else {
        navbar.style.backgroundColor = "#f4f4f4";
        navbar.style.opacity = "1";
        links.forEach(link => {
            link.style.color = "black";
            link.style.backgroundColor = "transparent";
            link.removeEventListener("mouseenter", null);
            link.removeEventListener("mouseleave", null);
            link.addEventListener("mouseenter", function () {
                link.style.color = "white";
                link.style.backgroundColor = "black";
            });
            link.addEventListener("mouseleave", function () {
                link.style.color = "black";
                link.style.backgroundColor = "transparent";
            });
        });
    }

    // Kiểm tra nếu trang đã cuộn về đầu trang
    if (window.pageYOffset === 0 || window.pageYOffset <= 60) {
        links.forEach(link => {
            link.style.color = "white";
            link.style.backgroundColor = "transparent";

        });
    }
});

