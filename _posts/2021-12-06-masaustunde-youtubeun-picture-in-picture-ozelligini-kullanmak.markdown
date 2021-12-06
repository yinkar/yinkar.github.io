---
layout: post
title: Masaüstünde Youtube Videosunu Yüzen Pencerede Açmak
date: 2021-12-06 12:51:00 +0300
author: Hüseyin Karabaş
description: Youtube'un picture-in-picture özelliğiyle, küçük bir pencerede video göstermesini sağlamak 
featured-image: /images/blog/youtube-picture-in-picture/youtube-picture-in-picture-cover.png
featured-image-alt: Youtube picture-in-picture
categories: web youtube medya
---

Günümüz modern tarayıcıları picture-in-picture API'ı taşıyor. Bu sayede; çok fazla bilinmese de, video oynatan bir sitedeki video içeriğini pencereden bağımsız, diğer pencerelerin üstünde kalacak, küçük ve yüzen bir pencere olarak izleyebiliyorsunuz. Bu özelliğe genellikle mobil tarafta veya sitenin kendi içerisindeki küçük bir benzeri ile denk gelmiş olabilirsiniz.

Eğer birden fazla monitörünüz yoksa, bir işi hallederken bir yandan da ara ara bir videoya bakmak istiyorsanız bu özellik işinizi görecektir. Nedense çok rahat ulaşılır bir yapısı yok, o yüzden fazla göz önünde bulunmuyor. Youtube bunu kendi menüsünde bir seçenek olarak sunmayı tercih etmiyor, fakat Chrome'un sağ tık menüsüne ulaşarak kullanabiliyoruz.

Bu özelliği kullanmak oldukça basit. Öncelikle izliyor olduğunuz videonun player'ına sağ tıklayın.
![Youtube picture-in-picture](/images/blog/youtube-picture-in-picture/youtube-picture-in-picture-1.png)

Gördüğünüz gibi aradığımız seçenek burada yok. Bu yüzden bu kısım çok önemli. Mouse'u hareket ettirmeden bir kez daha sağ tıklayın. Bu sefer tarayıcının kendi built-in menüsü açılacak.
![Youtube picture-in-picture](/images/blog/youtube-picture-in-picture/youtube-picture-in-picture-2.png)

Burada artık "Pencere içinde pencere" veya "Picture in picture" seçeneğini görüyor olacaksınız, artık işletim sisteminizin dili neyse. Tıkladığınızda artık bu tarayıcı penceresinden bağımsız, yüzen bir video penceresine sahip olacaksınız.

![Youtube picture-in-picture](/images/blog/youtube-picture-in-picture/youtube-picture-in-picture-3.png)

Bu pencere daha önce de söylediğim gibi, diğer pencerelerin üstünde görünecek. Ne yazık ki kontroller açısından eksik bir yapısı var, yalnızca play ve pause özelliğine sahip. İleri sarma, geri sarma gibi özellikler beklerdim.

Yüzen pencereyi açtığınızda video player'ı şu şekilde görünecek.

![Youtube picture-in-picture](/images/blog/youtube-picture-in-picture/youtube-picture-in-picture-4.png)

İstediğiniz zaman, yüzen pencere üzerindeki seçenek ile player'ı eski haline getirebilirsiniz.

[Picture-in-picture](https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API) web API'ı, tarayıcıların sunduğu bir özellik olduğundan dolayı bunun kullanımı Youtube ile sınırlı değil elbet. Desteklediği takdirde birçok websitesindeki player'da kullanabilirsiniz.