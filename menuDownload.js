(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        .menu-download {
            position: fixed;
            width: 200px;
            height: 100px;
            border-radius: 50%;
            bottom: 20%;
            left: 9%;
            transform: translateX(-50%);
            cursor: pointer;
            z-index:900;
        }
        
        .menu-download img {
            width: 100%;
            transition: all 1s ease;
        }
        @media (max-width: 768px) {
            .menu-download {
                position: fixed;
                width: 150px;
                height: auto;
                border-radius: 50%;
                bottom: 20%;
                left: 20%;
                transform: translateX(-50%);
                cursor: pointer;
                z-index:900;
            }
            .menu-download img {
                width: 100%;
                height: auto;
                transition: all 1s ease;
            }
        }
        .extra-imagesA {
            display: none;
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            opacity: 0;
            transition: all 1s ease;
            z-index: 10;
            width:100px;
        }
        
        .extra-imagesA img {
            margin-bottom: 10px;
            transition: transform 5s ease-in-out;
        }
        
        .extra-imagesA.show {
            display: block;
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    `;
    document.head.appendChild(style); // Menambahkan style ke dalam head

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-download');

    const imgA = document.createElement('img');
    imgA.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/SAVE.gif';
    imgA.alt = 'Click Me';
    imgA.id = 'clickImage';
    menuDiv.appendChild(imgA);

    const extraImagesDiv = document.createElement('div');
    extraImagesDiv.classList.add('extra-imagesA');
    extraImagesDiv.id = 'extraImagesA';

    // Gambar pertama
    const img1 = document.createElement('img');
    img1.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/FORANDROID.jpg';
    img1.alt = 'image1';
    const link1 = document.createElement('a');
    link1.href = "https://www.gameiosapk.com/android.php";
    link1.target = '_blank';
    link1.appendChild(img1);
    extraImagesDiv.appendChild(link1);

    // Gambar kedua
    const img2 = document.createElement('img');
    img2.src = 'https://github.com/yudha125/widgetMenu/blob/main/images/FOR_IOS.jpg';
    img2.alt = 'image2';
    const link2 = document.createElement('a');
    link2.href = "https://www.gameiosapk.com/iphone.php";
    link2.target = '_blank';
    link2.appendChild(img2);
    extraImagesDiv.appendChild(link2);

    menuDiv.appendChild(extraImagesDiv);
    document.body.appendChild(menuDiv);

    // Event listener untuk toggle
    imgA.addEventListener('click', function () {
        const extraImages = document.getElementById('extraImagesA');
        if (extraImages.classList.contains('show')) {
            extraImages.classList.remove('show');
        } else {
            extraImages.classList.add('show');
        }
    });

    // Tambahkan event listener untuk alert pada img1
    img1.addEventListener('click', function (event) {
        alert('INGIN BERMAIN DI MOBILE APK? TAMBAHKAN KODE @abq DIBELAKANG USERNAME UNTUK LOGIN DI MOBILE APK');
    });

    // Tambahkan event listener untuk alert pada img2
    img2.addEventListener('click', function (event) {
        alert('INGIN BERMAIN DI MOBILE APK? TAMBAHKAN KODE @abq DIBELAKANG USERNAME UNTUK LOGIN DI MOBILE APK');
    });
})();
