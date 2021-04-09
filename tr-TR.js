export default {
	categories: {
		gameOne: {
			title: 'Birinci Oyun',
			desc: 'İstediğin bir oyun motoruyla bir oyun oluştur, GameMaker ya da Unity gibi.',
		},
		gameTwo: {
			title: 'İkinci Oyun',
			desc: 'vitaSDK ya da dolceSDK kullanarak oluşturduğun kendi oyun motorunla bir oyun oluştur.',
		},
		utility: {
			title: 'Yararlı Yazılım',
			desc: 'Bir homebrew projesi ya da plugin oluştur.',
		},
		port: {
			title: 'Oyun Portu',
			desc: 'Başka bir sistem için yaratılmış bir oyunu ya da emülatorü portla.',
		},
	},

	rules: {
		submissionsLimit:
			'Geliştiriciler istedikleri kadar proje katılımında bulunabilirler, fakat her kategoriden yalnızca bir ödül kazanma haklarına sahipler.',
		previouslySubmitted:
			'Başvurulacak oyun, önceden PS4 veya Switch gibi bir platformda çıktıysa, katılımcının kendi oyunu dahi olsa, Port kategorisinde paylaşılmalıdır. Ama diğer Homebrew platformlarından olan Yararlı Yazılımlar, Yararlı Yazılımlar kategorisinde paylaşılabilir.',
		releasedBefore:
			'Eğer başvurulacak oyun daha önce PS Vita için çıktıysa, proje olarak sayılabilmesi için, resmi versiyonunun prototip aşamasında olmalı ve katılımcının oyunun geliştirilimini tamamlamış olması gerekmektedir. Yardımcı Yazılımlar için, değişiklikler çok fazla çalışma gerektiren homebrew/eklentilere bağlı olmalıdır.',
		noPiracy:
			'Hiçbir türlü korsan işe onay yoktur. Teliflenmiş hiçbir iş kullanılamaz. Oyunlar geliştiricinin kendi ürünü olmalıdır. Ne kadar Unity Asset mağazasında bulunan ücretsiz assetlerin kullanımına izin verilse de, kendi assetlerini kullanan geliştiricilerin projelerinin daha değerli kabul edileceği göz önünde bulundurulmalıdır. Portlar içinse, eğer port edilecek oyunun dosyaları herkese açık olarak paylaşılmadıysa, bu dosyalar kullanılamaz. RE tarafından yapılan motorlar kullanılabilir, ama kodu sızdırılan bir oyun motorundan üretilen oyun motorlarının kullanımı yasaktır.',
		paypal: 'Para ödülünü edinebilmek için PayPal hesabınız bulunmalıdır.',
		splashScreen:
			'Homebrewunuzun bootunda (Açılış ekranında), yarışma için belirlenen splashscreen bulunmalıdır (Live Area Asset olarak eklenilebilir. Pluginler elbette splashscreen gösteremeyecekleri için, reposundaki beni oku (readme) dosyasında kyûHEN yarışmasından bahsetmeni istiyoruz.).',
		publicRelease:
			'Projenizi, yalnızca biz kabul edip sitemizde yayınladıktan sonra sitemiz dışında kaynaklarda paylaşabilirsiniz.',
		openSource:
			'Eğer projeniz açık kaynak bir projeden esinlenildiyse, bu açık kaynak projenin izin verdiği standartlar çerçevesinden taşmamanız gerekmektedir.',
		cheats: 'Eğer hile yaptığınız ya da kopya çektiğiniz fark edilirse, yarışmadan uzaklaştırılırsınız.',
		categoriesPrizes:
			'Kategorilere ait ödüllerin dağılımında, bağış miktarı ve farklı etkenlere göre, bazı değişiklikler yapılabilir.',
	},

	pages: {
		home: {
			title: 'Ana Sayfa',
			slogan: 'Gel kardeşim, projen varsa gel!',
			categories: {
				homebrew: 'homebrew',
				game: 'oyun',
				utility: 'yararlı yazılım (utility)',
				port: 'port',
			},
			donate: 'Bağış',
			submit: 'Başvuru',
			submittedProjects: 'Başvurulan Projeler',
			aboutTitle: 'Hakkında',
			aboutContent1:
				"Twitter'daki masum bir konuşmadan gerçekliğe dönüştürerek, PSVita için 3. Homebrew yarışmasını sizlerle buluşturuyoruz. Geçtiğimiz günler, ve hatta aylar, PSVita için oldukça büyük yeniliklerle geçti. Sessiz bir topluluktan; Dreamcast emülatorleri, PS Vita için GTA oyunları, Sonic oyunlarının Vita'ya portlanması, Piglet (GLES 2.0 kütüphanesi) buluşu ve VitaGL'in hiç olmadığı kadar işlevsel oluşu gibi inanılmaz olasılıkların gerçekleşmesine kadar geçen bu süreçte, son vakitlerde duyurulan resmi mağazanın kapanması gibi büyük olumsuzluklara rağmen, PS Vita için inanılmaz güzellikler gerçekleşti. (Ki bu yüzden yarışmanın adını KyûHEN yani ani değişim koyduk.).",
			aboutContent2:
				'Bizse bu değişimi, Vita sahnesindeki insanların homebrewlara olan ilgilerini arttırarak, konsolun iyiliği için kullanmak istiyoruz. İnsanları VitaGL, SDL, Unity, oyunlar için geliştirilen Piglet ve vita/dolce SDK gibi araçları kullanarak Vita için içerik üretmeye davet ediyoruz. Eğer bu servüvenin bir parçası olmak ve kendini göstermek istiyorsan, KyûHEN yarışmasına Hoş Geldin!',
			cimmerianDesc:
				'Ben, bir Custom Protocol (Fransız hacking sitesi ve aynı zamanda önde gelen GekiHEN yaratıcısı) üyesi olarak buradayım. Bilgilerimi, henkaku ve Vita Nuova discord sunucularındaki istekli insanlara yardımcı olacak şekilde, konuşarak ya da Vita troubleshooting rehberimi kullanarak sunmaktan zevk alıyorum. Sıklıkla Homebrew yarışmalarına beta testçisi veya çevirmen olarak katılım gösteriyorum. Discord veya Twitter hesabım aracılığıyla bana ulaşabilirsiniz.',
			oldGamingDesc:
				'Ben Sandeep Rai, ya da YouTube ve Twitterda bilindiğim adımla “2 Old 4 Gaming”. Hayatımın uzunca bir süresidir oyun oynuyorum. Kardeşimle televizyonun karşısına geçip NES oynayarak çok zevkli hatıralar edindim, ama büyüdükçe taşınabilir konsolların bana daha uygun olduğu kanısına vardım. PlayStation Vita, inanılmaz çeşitli oyun kütüphanesi ve taşınabilirliğiyle birlikte, söz konusu oyun olduğunda ilk oyun konsolu tercihim. Vita ve oyunlarına olan aşkım, beni sadece sistemin tarihi hakkında bir kitap yazmaya değil, aynı zamanda bir YouTube kanalı açmaya da itti. Beni Twitterda ve Youtube kanalımda bulabilirsin.',
			frangarcjDesc:
				'VITASDK projesinin önde gelen katılımcılarından ve PS Vita RetroArch projesinin yapımcısıyım. Ayrıca, Vita3K emülatörü projesinde de görev aldım. Rejuvenate vakitlerinden beri bu sahnede aktifim ama günlük hayatım, geliştiricilik için ayırdığım zamanın bir kısmını elimden aldı. Bugünlerde, tek amacım HENkaku ve Vita Nuova Discord sunucularında proje geliştiricilerine yol göstermek ve yardımcı olmak. Beni Twitter ve Github platformlarında bulabilirsiniz.',
		},
		details: {
			title: 'Detaylar',
			intro: {
				title: 'Giriş',
				content1:
					'Yarışma 2 ay sürecek, yani son gün 27 Mayıs. Yarışma boyunca biz, Birinci Oyun ve İkinci oyun ile yaratıcılığı ve orjinalliği ön planda tutmak istiyoruz. Güçlerimizi PS Vita için oyun çıkaran profesyonellerle birleştirerek, yeni katılan amatör oyun geliştiricilerini desteklemeyi ve onlara yön göstermeyi hedef belirledik. Geçmişte (PS3 sahnesiyle birlikte daha çok PSP sahnesinde), hacking komünitesi, aktif katılımcılarıyla olabildiğince güçlü bir dönemdeydi. Bu sahneden forumlar ve efsaneler (DarK Alex, ya da birkaçı için Geohot) elimizdeki bu *büyü* için bizi gaza getirdiler ve ellerindeki Sony cihazlarını hackleyerek gelişmemize yardımcı oldular. Zaman geçtikçe, PS4 ve PS5 gibi cihazlarla sistem güvenliğini aşması zorlaştıkça, hackleme komünitesi aktifliğini qj.net veya PSPGen gibi efsanevi sitelerle beraber kaybetti. ',
				content2:
					'Bu yarışma, Wololo katkılarıyla, PSX-Place ve PlayStationHaX ile bu kaybolan ışığı yeniden aydınlatmak için bize bir fırsat sundu ve umarız internetteki insanlara ellerindeki cihazları hacklemelerinin ilginçliğini yeniden hatırlatacak. Bu yarışma, ardı durmayan gelişmelerin devamlılığını isteyen topluluğumuzun kararlılığı ile ortaya bir fikir olarak çıktı ve sonunda gerçek oluyor. Ama bu projenin başarılı olabilmesi için sana ihtiyacımız var!',
			},
			process: {
				title: 'Süreç',
				content: 'Yarışma, 3 basit aşamada gerçekleşecek:',
				step1:
					'Her yarışmacı 4 farklı kategoriye başvurarak projelerini paylaşabilecekler. Yarışma, 27 Mart ile 27 Mayıs arasında gerçekleşip 2 ay sürecek.',
				step2:
					'Jüri, projeleri değerlendirip kendilerine göre puanlandıracaklar; biz ise bu puanlamaları birleştirip, katılımcılara genel değerlendirmeli tek bir puan açıklayacağız.',
				step3:
					'Ödül ise kurallar ve bilgilendirme sekmesinde açıklandığı gibi bölüştürülüp kazananlara verilecek.',
			},
			categories: {
				title: '4 Kategori',
			},
			voting: {
				title: 'Oylama',
				content1:
					'Jüriler, en son, proje hakkında neyi sevdiklerini, sevmediklerini, nasıl geliştirilebileceğine dair herhangi türde önerilerini paylaştıkları bir paylaşım yapacaklar.',
				content2:
					'Genel değerlendirme, tüm jürilerin katkılarıyla yapılacak. Sonuçlar, yarışmanın websitesinde yayınlanacak.',
			},
			prizes: {
				title: 'Ödüller',
				contentStart: 'Yukarıda gösterilen 4 kategori için burada biriken ',
				donationPlatform: 'Ko-Fi hesabımız',
				contentMiddle: ' (minimum birikim ',
				amountCollected: '455 $',
				contentEnd: ' sponsorlarımıza çok teşekkürler) ödül miktarını paylaştıracağız.',
				conclusion:
					'Ardından 1., 2., 3. (ya da daha fazla) olan yarışmacılar arasında, kategori başına yapılan başvuru sayısına göre, ödülü bölüştüreceğiz.',
			},
			rules: {
				title: 'Kurallar',
				splashScreen:
					'Oyununuzun/homebrewunuzun/portunuzun açılışında (bootunda) kullanmanız gereken Splashscreen:',
			},
			contact: {
				title: 'İletişim',
				intro: 'Yarışma hakkında sorularınız mı var? Bizimle iletişim mi kurmak istiyorsunuz?',
				contentStart: 'Bize e-posta gönderebilir ',
				contentMiddle: ' ya da Twitter hesabımıza mesaj atabilirsiniz ',
				contentEnd: '.',
			},
		},
		resources: {
			title: 'Kaynaklar',
			pageTitle: 'Araçlar',
			vitaSDK: {
				title: 'VitaSDK',
				setupUnity: 'PS Vita için Unity nasıl kurulur',
				deployProject: 'PS Vita için bir proje nasıl kolayca çalıştırılabilir',
				gameMakerExportTool: 'GameMaker Studio PS Vita export aracı',
			},
			helpingTools: 'Hayatınızı kolaylaştırabilecek birkaç araç.',
			debuggingTools: {
				title: 'İşe yarar debugging araçları',
				gdbVita: 'Vita için GDB (uygun değildir.)',
			},
			discordServers: {
				title: 'Yararlı Discord sunucuları',
				henkakuSpecialities: 'genellikle VitaSDK üzerine',
				nuovaSpecialities: 'genellikle VitaSDK üzerine',
				cbpsSpecialities: 'genellikle DolceSDK/Unity/GameMaker üzerine',
			},
		},
		submissions: {
			title: 'Başvurular',
			temp: {
				contentStart: 'Başvuru sisteminin yapımı daha tamamlanmadığı için lütfen şu formu kullanın.',
				contentLink: 'Google Form',
				contentEnd: ' şimdilik.',
				outro: "Olabildiğince hızlı bir şekilde bitirmeye çalışıyoruz.",
				thanks: 'Anlayışınız için teşekkür ederiz.',
			},
		},
	},

	signs: {
		colon: ':',
	},

	others: {
		comingSoon: {
			top: 'çok',
			bottom: 'yakında...',
			detailsStart: 'Başvuru sayfasının açılacağı tarih: ',
			detailsDate: '8 Nisan',
			detailsEnd: '',
		},
	},
};
