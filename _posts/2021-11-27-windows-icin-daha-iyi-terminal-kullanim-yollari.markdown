---
layout: post
title: Windows için Daha İyi Terminal Kullanım Yolları
date: 2021-11-27 09:26:00 +0300
author: Hüseyin Karabaş
description: Visual Studio Code'da kenar çubuğundaki yetersiz ağaç girintilemesini arttırmak 
featured-image: /images/blog/windows-komut-satiri/windows-komut-satiri-cover.png
featured-image-alt: Windows komut satırı
categories: windows komut-satiri terminal
---

Geliştirme yapıyorsanız Windows özellikle terminal, veya kendi deyimiyle "komut satırı" konusunda oldukça sorun çıkarıyor. Yaklaşık 2.5 yıldır, MacOS kullandığım kısa bir dönemi saymazsak neredeyse kesintisiz şekilde Linux dağıtımları kullanıyorum. Bu süreçte Windows'u ancak 1-2 kere, o da mecburiyetten dolayı olacak şekilde kullanmışımdır. Özellikle düşük özelliklere sahip bilgisayarlarda insanı çıldırtıyor. Kimi zaman, istemesem de mecburiyetten Windows kullanmam gerekebiliyor, şu an da o durumdayım. Elimdeki bilgisayar yeni ve Windows 10 işletim sistemiyle gelmiş durumda. Daha önce daima yaptığımın aksine bu sefer, en azından şimdilik bu bilgisayara farklı bir işletim sistemi kurmayı düşünmüyorum, şu anlık bir stabiliteye ihtiyacım var. Her Windows kullanmam gerektiğinde başta geliştiricilik olmak üzere birçok konuda işletim sisteminin beni yavaşlattığını ve engel olduğunu görebiliyorum. Şimdi terminal konusunu ele almaya başlayalım.

Windows'un "cmd.exe" isimli komut satırı uygulaması zaten daima bildiğiniz gibi. Mecburiyetten kullanılır bir halde. Fakat onunla ilgili birkaç ipucu da vereyim de bu yazı olabildiğine yardımcı bir kaynak olsun.

Belki biliyorsunuzdur fakat bu ipucunu yine de vereyim. Sanırım Windows'ta bu gibi, System32 gibi yol değişkenine ekli klasörlerde yer alan uygulamaları açmanın en hızlı yolu ``çalıştır`` penceresini kullanmak. Bu yüzden, örneğin benim gibi Linux'ta ``Ctrl + Alt + T`` veya ``Super + T`` gibi kısayollarla hızlıca bir terminal penceresi açmaya alıştıysanız bu yolla Windows'ta da işinizi daha hızlı halledebilirsiniz. Biliyorsunuz, Windows tuşu diğer işletim sistemlerinde ``Super`` ismiyle geçer.

``Windows + R`` tuşu, çalıştır penceresini açacaktır. Buraya ``cmd`` yazarak ``Enter`` tuşuna bastığınızda Komut Satırına ulaşabilirsiniz. Sonraki Çalıştır penceresini açtığınız seferlerde, daha önceki yazdığınız komut da orada duruyor olacağından, bir tık daha hızlanabilirsiniz. Tabii buradan ``mspaint``, ``notepad`` gibi uygulamaları da isimleriyle çağırabileceğinizi biliyorsunuzdur.

Şimdi pek bilinmeyen, fakat çok ihtiyaç duyulan bir ipucuna gelelim. Çoğu zaman Komut Satırı penceresini yönetici modunda çalıştırmak gerekebiliyor, örneğin paket yöneticileriyle global kurulumlar yapılacaksa. Çalıştır penceresinden çalıştırdığınız uygulamaları yönetici moduyla açıp açamayacağınızı merak ettiyseniz, bu mümkün. Uygulamanın ismi yazıldıktan sonra Enter tuşu yerine ``Ctrl + Shift + Enter`` tuş kombinasyonunu tuşladığınızda uygulamayı yönetici modunda açmanızı sağlayacak dialog ekranına ulaşabileceksiniz.

Yazılım geliştiriyorsanız, istediğiniz uygulamaları ve paketleri komut satırından yükleme ihtiyacınız oldukça fazla oluyordur. NPM, Pip gibi paket yöneticiler kurulu olduğunda, onların dahilindeki paketleri, eğer yönetici modundaysanız halihazırda kurabiliyorsunuz. Fakat bizzat Windows dahilinde global olarak çalışacak bir paket yönetici ihtiyacı hissetmişsinizdir. Bunun için [Chocolatey]([https://chocolatey.org/install](https://chocolatey.org/install))'yi kullanabilirsiniz. Kurulumunu kendi sayfasında yer alan direktiflere göre Powershell üzerinde yaptıktan sonra, yönetici modunda açılmış terminallerle istediğiniz paketi kurabilir hale geleceksiniz. Örneğin ``choco install php`` diyerek PHP'yi sisteminize kurabileceksiniz. Bu şekilde yazılım geliştirme için ihtiyaç duyulan uygulamalar ve onların bağımlılıkları, ayarlamaları da çok daha hızlı bir şekilde yapılacak, çünkü Chocolatey bu paketleri önünüze olması gerektiği gibi seriyor.

Ha bir de Powershell meselesi var tabii. Kendisini gerçekten hiç sevmiyorum, arkaplan renk seçimi dahi berbat. Komutları ise bana aşırı çirkin geliyor. Komut ve betik dili olarak çok zengin olsa da, kullanım kolaylığı olarak pek bir şey katılmamış durumda. cmd.exe için söylediğim her şeyi Powershell için de kullanabilirsiniz.

Komut satırının çok saçma bir özelliği var: örneğin bir işlemin sonucunu beklerken pencerenin durakladığını fark edebiliyorsunuz ve pencereye bir geribildirimde bulununca aslında o işlemin çoktan bittiğini ve boşu boşuna beklediğinizi anlıyorsunuz. Bunun nedeni farkında olmadan pencereye tıklamış olmaktan kaynaklanıyor. Varsayılan olarak açık gelen bu saçmalık, ister inanın ister inanmayın cmd.exe'nin bir özelliği. Pencere başlığına sağ tıklayarak, ``Özellikler`` seçeneği ile ulaşacağınız pencereden ``Hızlı Düzenleme Modu`` seçeneğini deaktif ederek bundan kurtulabilirsiniz. İngilizcesi de ``Quick Edit Mode`` elbette.

Komut Satırının can sıkan noktalarından biri de kopyalama ve yapıştırma işleri. Bir metni seçtikten sonra ``Enter`` tuşuna bastığınızda metin kopyalanacaktır. Yapıştırmak için ise sağ tıklamanız gerekiyor.

Windows için daha iyi terminal seçenekleri mevcut. Örneğin Git kurulumu yaparsanız, bir klasörde sağ tıkladığınızda gelen seçeneklerden biri olan "Git Bash Here" ile ulaşabileceğiniz MINGW64 terminali. Bununla birçok açıdan tıpkı Linux'ta gibi bir kullanıma sahip olabilirsiniz. O an başka bir seçeneğim olmadığında, Git'e halihazırda daima ihtiyacım olduğundan genelde bunu kullanıyorum. ``ls``, ``cat``, ``alias`` ve benzeri Unix komutlarını kullanabilmenize olanak sağlayacaktır.

Bir başka seçenek ise [Cmder]([https://cmder.net/](https://cmder.net/)). Websitesini incelediğinizde birçok kolaylık sağladığını göreceksiniz. Cmder, bir zip dosyası olarak iniyor. Bunu C:\\cmder gibi bir dizine açtıktan sonra sistem yoluna (PATH değişkenine) ekleyerek kullanmaya başlayabilirsiniz. Ben aynı zamanda kendisi için ``Ctrl + Alt + T`` kısayolunu oluşturdum. Cmder'in görev çubuğundaki sekmesine sağ tıklayarak, özellikler seçeneğinden erişeceğiniz penceredeki Kısayol bölümüne istediğiniz kısayolu girebilirsiniz.