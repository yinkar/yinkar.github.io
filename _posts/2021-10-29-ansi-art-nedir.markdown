---
layout: post
title: "ANSI Art Nedir"
date: 2021-10-29 11:18:00 +0300
categories: blog
author: Hüseyin Karabaş
description: Terminal'de pixel art sanatı
featured-image: /images/blog/ansi-art/ansi-art-cover.png
featured-image-alt: ANSI Art Kedi
categories: blog linux terminal sanat curl
---
Geçenlerde şöyle bir şey oluşturdum:

![curl -L git.io/nightstreet](/images/blog/ansi-art/ansi-art-1.png)

Terminali açarak şunu yazdığınızda, eğer terminaliniz 256 rengi destekliyorsa siz de bu sonucu alacaksınız:

```
curl -L git.io/nightstreet
```

[Kaynak kodu](https://gist.github.com/yinkar/3a7916a370bab438ef9ae05913cf5ade) da Github Gist üzerinde yer alıyor.

Daha önceden şu şekilde çalışmalar yapan bir eleman vardı, ondan esinlendim:

![Xero](/images/blog/ansi-art/ansi-art-2.png)

Kendisinin [Github Gist adresini](https://gist.github.com/xero) de vereyim.

Şimdi tek tek bunun nasıl çalıştığının üzerinden geçelim. ``curl``, en basit tanımla uzak bir adresteki içeriğe erişmenizi sağlayan bir yazılımdır. Genelde HTTP istemcisi olarak kullanılsa da birçok protokolü destekler. Biz burada HTTP istemcisi olarak kullanıyoruz. cURL ile bir web sitesine terminal üzerinden bağlanabilirsiniz:

```
curl google.com
```

![curl google.com](/images/blog/ansi-art/ansi-art-3.png)

Görüldüğü gibi adrese bağlandı ve içeriği getirdi. Tabii burada bir sorun var, Google ana sayfasının HTML içeriği bu şekilde değil. cURL, bağlandığı adreste bir HTTP yönlendirmesiyle karşılaştı ve bu yönlendirmeyi takip etmedi. Bunu bizim belirtmemiz gerekiyor. Bunu ``-L`` opsiyonuyla gerçekleştireceğiz.

![curl -L google.com](/images/blog/ansi-art/ansi-art-4.png)

Şimdi olması gereken sonuç karşımıza çıktı.

Tekrar benim kodladığım örneğe dönelim. git.io, Github'a ait olan bir URL kısaltma servisi. Yalnızca Github üzerindeki URL'leri kısaltmayı sağlıyor. Resmi terminale basmak için bağlandığımız git.io adresi de bir yönlendirme içerdiği için ``-L`` opsiyonunu kullanıyoruz. Şimdi o bağlandığımız git.io/nightstreet adresine tarayıcı üzerinden gidelim. Karşımıza şöyle bir sonuç çıkacak:

![ANSI art kodu](/images/blog/ansi-art/ansi-art-5.png)

Bu metin aslında doğrudan terminalimize gelen içerik. Terminal bu kodlamaları yorumluyor ve onları renkler gibi çeşitli görselleştirmelere dönüştürüyor. ANSI art dediğimiz şeyin arkasında da da bu var. Ona geçmeden önce bu içeriğin nerede tutulduğuna bakalım. Adresten anlayabileceğiniz üzere bu sayfa aslında doğrudan benim yazının başında da verdiğim, Github Gist üzerinde yer alan kaynak kodunun yalın olarak görüntülendiği sayfadan başka bir şey değil. Esinlendiğim kişinin kullanıcı adına da böyle ulaşmıştım.

Yalnız şu an fark ediyorum, Visual Studio Code üzerinde bu kodlamaları yaparken kullandığım eklentinin önizleme özelliği varmış. Ben yalnızca metin üzerinden renkleri görerek kodlamış, önizleme için ise basit bir Bash betiği yazmıştım.

![VSCode ANSI art](/images/blog/ansi-art/ansi-art-6.png)

O betik de dosyayı her güncellediğimde ekrana yeni halini basmaya yarıyor. Kendisi de [şu](https://gist.github.com/yinkar/b4190d92d880c3f6e434606691ea81ca) adreste.

Yazının devamında ANSI kaçış (escape) karakterleri ve blok karakterlerinden bahsederken bu resmin de kaynak kodunu inceleyeceğiz.

Ben bu resmi kodladıktan sonra bunun aslında bu kadar uğraş gerektirmemesi gerektiğini düşündüm. Yazılımcı dediğin bir eylemi ikinci defa yapmaz, otomatize eder. Bundan dolayı terminal için çıktı üretecek bir pixel art editörü kodladım. Gerçek anlamda, tam donanımlı bir pixel art editörünü de ilerleyen zamanlarda kodlamayı düşünüyorum.

[ANSI Art Painter](https://yinkar.github.io/toys/ansi-art-painter/)

![ANSI Art Painter](/images/blog/ansi-art/ansi-art-7.png)

Bu editörden alacağınız çıktıyı veya kaydedeceğiniz dosyayı komut satırından ``cat`` komutu ile açtığınızda çizdiğiniz resmin terminale basıldığını göreceksiniz, tıpkı bu yazının kapak resminde olduğu gibi. Elbette bu editör ANSI'nin tüm nimetlerinden faydalanmıyor, blok karakterlerini hiç kullanmıyor diyebiliriz. Geliştirme aşamasının hızlı olması için bazı detaylardan feragat ettim, buna yazının devamında değinirim.

Artık ANSI art yazısına tam olarak başlayabiliriz. ANSI aslında American National Standards Institute ifadesinin kısaltmasıdır ve işi standartları belirlemek olan özel bir kuruluşun ismidir. ASCII gibi standartları da bu kuruluş belirlemiştir.

ASCII art'ı hepiniz bilirsiniz. ASCII art olarak örneğin şöyle bir şey çizmiştim:

```
               (   (  
                ) )   
               (_(    
               |__|   
           .    ||    
         /  \ ` ||-+  
       /      \   /|  
     /          \/ |  
    +-----------+/||  
    |  _    _   ||/|  
    | |_|  |_|  |  |  
    |  _    __  |  +  
    | |_|  |  | | /   
    |      |' | |/    
    +-----------+     
                      
```

Temel olarak her yazı karakterin birbiriyle aynı boyda olduğu fontlara sahip yerlerde bu karakterlerle yapılan resimler. Bu fontlara monospace adı veriliyor. ASCII art köken olarak 256 karakterlik ASCII tablosunu temel alsa da, zaman zaman sonrasında türeyen karakter kümelerindeki karakterler de kullanılabiliyor. Bak şimdi buna da ASCII art diyen var

__̴ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡\|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲\|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡̡̡̡.___

Aslında denmemesi lazım tabii.

ANSI art dediğimiz kavram ise buna benziyor, fakat kaçış karakterleri ile metni formatlama imkanı ve çok daha fazla karakter içeriyor. Örneğin şu blok karakterleri çok önemli: 
``░ ▒ ▓ ▉``.

ANSI Art Bulletin Board System (BSS)'larda çok kullanılan bir yöntem. BBS, 1980'lerle 1990'larda yaygın olarak kullanılan, terminal üzerinden bağlanılan sistemlerin ismi. Web'in çok yaygın olmadığı, hatta var olmadığı zamanlarda kullanılan sistemler bunlar. Benim de çok ilgimi çekiyor, o dönemlerde o dünyanın içinde bulunmak isterdim açıkçası. Çocukken teletext dahi çok ilgimi çekerdi. Aslında teletext dahilinde de bir miktar ANSI art'tan söz edebiliriz. Belki bu yazının devamında teletext art'tan da biraz bahsederim.

BBS çok eski bir kavram olsa da, BBS konseptini halen sunan insanlar var. Bağlanmak için tek gereken ise bir Telnet istemcisi. BBS'lerle ilgili ileride bir yazı yazabilirim fakat şimdi örnek olarak bir BBS'e Telnet üzerinden bağlan alım ve orada da ANSI art kullanımını görelim:
![Örnek BBS](/images/blog/ansi-art/ansi-art-8.png)

ANSI Art çizebilmek için [şu](http://www.roysac.com/roy-sac_downloads_links.html) tarz uygulamalar mevcutmuş.

Fakat ben bunun temelinden öğretmeyi düşünüyorum, doğrudan kaçış karakterleri ile. Bu sayede bunları yazdığınız programların çıktılarında da kullanabilirsiniz.

Burada yazacak olduğumuz escape karakterleri içeren metinleri terminal üzerinde gösterecek olmanız yeterli. Bu da demek oluyor ki, istediğiniz herhangi bir dili kullanabilirsiniz, programın çıktısının ANSI kaçış karakterlerini içermesi yeterli. Hatta Unicode formatıyla tarayıcıların geliştirici konsolunda da kullanmanız mümkün. C'de printf(), Python'da print(), PHP'de (komut satırında çalıştıracağımızı unutmadan) echo kullanmak yeterli.

Biz bash komutlarından echo'yu kullanacağız. Fakat echo kullanırken kaçış karakterlerini kullanabilmek için ``-e`` opsiyonunu eklememiz gerekiyor. Bu opsiyon backslash'lerin (\\) işlenmesini sağlıyor.

Şimdi bir örnek verelim ve bunun üzerinden gidelim. Şu komutu terminal üzerinde deneyebilirsiniz:

```
echo -e "\033[31mDelirmek üzereyim"
```

Çıktısı da şu şekilde olacak:

![ANSI art çıktısı](/images/blog/ansi-art/ansi-art-9.png)

Kodun başında bir adet, bunun bir ANSI kaçış kodu olduğunu belirten kısım bulunuyor. Buna ESC karakteri deniyor ve bunun için birçok alternatif var. ``\033`` olabilir, onun hexadecimal (on altılık) karşılığı olan ``\0x1b`` olabilir, ``\e`` olabilir veya bahsetmiş olduğum Unicode'u sembolize eden ``\u001b`` olabilir. Genel olarak işletim sistemlerinde yaygın olarak kullanılan hali ``\033`` şeklinde. 

Sonrasında biraz sinir bozucu bir şekilde gelen ``[`` karakteri var. Sinir bozucu, çünkü bu kapanmayacak. Buna bu yüzden bir parantez açılış karakteri gibi bakmamak lazım. Sonrasında ise asıl yoğunlaşacağımız kısım, renk kodu geliyor. ``31`` kırmızıyı simgeliyor. Bu kodları tablo olarak göreceğiz. Son olarak da bir ``m`` harfi orada kaderine terk edilmiş bir şekilde bekliyor. Format bu. Dinamik kısım üçüncü ele aldığımız kısım. Bu kısım tek bir koşul içermek zorunda değil, birden biçim ifadesi ``;`` karakteriyle ayrılarak yan yana yazılabilir. Şimdi bir tablo ile bu önplan renklerini gösterelim.

| Kaçış Karakteri | Anlamı     |
|-----------------|------------|
|   \033[30m      |  Siyah     |
|   \033[31m      |  Kırmızı   |
|   \033[32m      |  Yeşil     |
|   \033[33m      |  Sarı      |
|   \033[34m      |  Mavi      |
|   \033[35m      |  Mor       |
|   \033[36m      |  Camgöbeği |
|   \033[37m      |  Beyaz     |

Hadi bir de arkaplan renkleri için deneyelim. Aşağıdaki ifade kırmızı bir arkaplana sahip bir metin gösterecek.

```
echo -e "\033[41mÇiğköfteyi mantıklı bulmuyorum"
```

![ANSI art çıktısı](/images/blog/ansi-art/ansi-art-10.png)

Arkaplan renk kodları için de gerekli kodların tablosu da şu:

| Kaçış Karakteri | Anlamı            |
|-----------------|-------------------|
|   \033[40m      |Siyah arkaplan     |
|   \033[41m      |Kırmızı arkaplan   |
|   \033[42m      |Yeşil arkaplan     |
|   \033[43m      |Sarı arkaplan      |
|   \033[44m      |Mavi arkaplan      |
|   \033[45m      |Mor arkaplan       |
|   \033[46m      |Camgöbeği arkaplan |
|   \033[47m      |Beyaz arkaplan     |

İki kodu beraber kullanabileceğimizi söylemiştim.

```
echo -e "\033[045;031mBir kilo domates mantıken 1000 domates demektir"
```

![ANSI art çıktısı](/images/blog/ansi-art/ansi-art-11.png)

Korkunç bir göz infazı oldu sanki. 

Önceki yazdığımız kodlarda bir eksik var. Söz konusu kodları kullandığımızda yazının geri kalan tüm kısmı da aynı şekilde stillendirilecek. Bu yüzden aslında bir kapanış ifadesine ihtiyacımız var. Stili sıfırlamak için ``\033[0m`` kodunu kullanıyoruz.

```
echo -e "\033[035mBu bir\033[0m Bu iki"
```

![ANSI art çıktısı](/images/blog/ansi-art/ansi-art-12.png)

Şimdi de diğer stillendirme komutlarına bakalım. Bunlarla yazıyı kalın, ince, italik, yanıp sönen hale getirebiliriz.

| Kaçış Karakteri | Anlamı            |
|-----------------|-------------------|
|   \033[0m       |Normal             |
|   \033[1m       |Kalın              |
|   \033[2m       |Düşük yoğunluklu   |
|   \033[3m       |İtalik             |
|   \033[4m       |Altı çizgili       |
|   \033[5m       |Yanıp sönen        |
|   \033[6m       |Hızlı yanıp sönen  |
|   \033[7m       |Arkaplan           |
|   \033[7m       |Görünmez           |

Bunlardan benim en ilgimi çeken yanıp sönme kodu oldu. Arkaplan ile beraber kullanalım:

```
echo -e "\033[05;41mCiğerimiz kalmamıştır"
```

![ANSI art çıktısı](/images/blog/ansi-art/ansi-art-13.gif)

Buraya kadar öğrendiklerinizle boşlukları bu birkaç renk ile arkaplan renklendirmesi kullanarak renklendirebilir, daha detaylı kısımlar için ise blok karakterini önplan renklendirmesi ile renklendirebilirsiniz. Kodladığım şu ANSI Art Painter uygulamasında yalnızca boşlukları renklendiriyorum ve her kare için iki boşluk kullanıyorum. İki boşluk neredeyse bir kare boyutuna denk geliyor.

Komutu ekrana bastırdığınızda ekrandaki önceki karakterlerin silinmesi için ise şu kodu kullanabilirsiniz:

```
\033[H\033[J
```

Basitçe açıklamak gerekirse olarak ``\033[H`` ifadesi imleci ekranın sol üst köşesine getiriyor, ``\033[J`` ifadesi ise imleçten ekranın sonuna kadar olan kısmı siliyor. Bu H ve J karakterlerine CSI (Control Sequence Introducer) karakterleri, öncesinde gösterdiğim stillendirme ifadelerine de SGR (Select Graphic Renddition) parametreleri deniyor.

Yazı uzayıp gitmiş. Umarım şunu yazının geri kalanında açıklayacağım deyip de unuttuğum bir kısım olmamıştır. Şu an yazıyı baştan sona okumaya üşeniyorum, sonra bakarım. Belki sonraki yazacağım yazılardan birinde 256 renk kullanımına ve daha detaylı kullanımlara girerim. Geleceğe selamlar, hadi ben gidiyorum.

