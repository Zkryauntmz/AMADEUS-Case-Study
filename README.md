# AMADEUS-Case-Study
Flight Search Application QA Tests


Case Study: Flight Search Application QA Tests  (QA Engineer) 

Açıklama 
Bir uçuş arama uygulamasının frontend ve backend’i için test yazılacak.

.

Beklentiler:
Backend
“https://flights-api.buraky.workers.dev/” adresinde çalışan bir API’miz var. Bu API için test yazmanı istiyoruz.
Herhangi bir araç ya da programlama dili kullanılabilirsin.
Yapılacak testler
HTTP status code’larını kontrol et
GET istekleri 200 status code dönmeli
Response içeriğini kontrol et
GET isteklerinden şu yapıda bir cevap gelmeli:
Response: Object[string -> Array[Flight]]

Flight {
    Id   integer
    From string
    To   string
    Date string
}

Example:

{
  “data”: [
    {
      "id": 1,
      "from": "IST",
      "to": "LAX",
      "date": "2022-12-13"
    },
    {
      "id": 2,
      "from": "JFK",
      "to": "LHR",
      "date": "2022-12-14"
    }
  ]
}

Header kontrolü
GET isteklerinden gelen response’un içinde “Content-Type” header’ı olmalı ve değeri “application/json” olmalı.
Frontend
	Flight App uygulaması için otomatik UI testleri oluştur 👉https://flights-app.pages.dev/
Playwright/Selenium benzeri bir otomatik UI testi aracı kullanabilirsin.
Yapılacak testler
Search
“From” ve “To” input alanlarında aynı değerin girilemediğini test et.
⚠️ App’te bu alanların aynı girilebildiğini göreceksin. Yani bu test hata alıyor olmalı. Tebrikler, bir bug tespit ettin.

⚠️Her şehir arasında uçuş olmadığı için bazı sorgulardan cevap dönmeyecektir. İpucu: “From: Istanbul”, “To: Los Angeles” seçtiğinde iki adet uçuş listelendiğini görmelisin.
Listeleme
“Found X items” yazısında X sayısı ile listelenen uçuş sayısının aynı olduğunu test et.
✅Bu test başarılı şekilde geçmeli
⚠️Her şehir arasında uçuş olmadığı için bazı sorgulardan cevap dönmeyecektir. İpucu: “From: Istanbul”, “To: Los Angeles” seçtiğinde iki adet uçuş listelendiğini görmelisin.
