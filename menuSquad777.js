(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        .menu {
            position: fixed;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            bottom: 4%;
            left: 6%;
            transform: translateX(-50%);
            cursor: pointer;
            z-index:1000;
        }
        
        .menu img {
            width: 150px;
            height: auto;
            transition: all 1s ease;
        }
        @media (max-width: 768px) {
            .menu {
                position: fixed;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                bottom: 4%;
                left: 10%;
                transform: translateX(-50%);
                cursor: pointer;
                z-index:1000;
            }
            .menu img {
                width: 100px;
                height: auto;
                transition: all 1s ease;
            }
        }
        .extra-images {
            
            display: none;
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            opacity: 0;
            transition: all 1s ease;
            z-index: 10;
        }
        
        .extra-images img {
            width: 80px;
            height: 80px;
            margin-bottom: 10px;
            transition: transform 5s ease-in-out;
        }
        
        .extra-images.show {
            display: block;
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    `;
    document.head.appendChild(style); // Menambahkan style ke dalam head

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const img = document.createElement('img');
    img.src = 'https://pokhok.info/assets/images/SQUAD777.gif';
    img.alt = 'Click Me';
    img.id = 'clickImage';
    menuDiv.appendChild(img);

    const extraImagesDiv = document.createElement('div');
    extraImagesDiv.classList.add('extra-images');
    extraImagesDiv.id = 'extraImages';

    const img1 = document.createElement('img');
    img1.src = 'https://pokhok.info/assets/images/tele.gif';
    img1.alt = 'image1';
    const link1 = document.createElement('a');
    link1.href = "https://t.me/Squad777official";
    link1.target = '_blank';
    link1.appendChild(img1);
    extraImagesDiv.appendChild(link1);

    const img2 = document.createElement('img');
    img2.src = 'https://pokhok.info/assets/images/rtp.gif';
    img2.alt = 'image2';
    const link2 = document.createElement('a');
    link2.href = "https://t.ly/rtp-squad777";
    link2.target = '_blank';
    link2.appendChild(img2);
    extraImagesDiv.appendChild(link2);

    const img3 = document.createElement('img');
    img3.src = 'https://pokhok.info/assets/images/wa.gif';
    img3.alt = 'image3';
    const link3 = document.createElement('a');
    link3.href = "https://api.whatsapp.com/send/?phone=6287718192707&text&type=phone_number&app_absent=0";
    link3.target = '_blank';
    link3.appendChild(img3);
    extraImagesDiv.appendChild(link3);

    menuDiv.appendChild(extraImagesDiv);
    document.body.appendChild(menuDiv);

    img.addEventListener('click', function () {
        const extraImages = document.getElementById('extraImages');
        if (img.src.includes('https://pokhok.info/assets/images/SQUAD777.gif')) {
            img.src = 'https://pokhok.info/assets/images/close.gif'; 
            extraImages.classList.add('show'); 
        } else {
            img.src = 'https://pokhok.info/assets/images/SQUAD777.gif'; 
            extraImages.classList.remove('show'); 
        }
    });
})();
