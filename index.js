const isCreditCardNumberValid = (cardNumber) => {
// parametreyi stringe dönüştürüyorum
        let str = cardNumber.toString()
        // string içerisindeki bütün tireleri kaldırıyorum
        str = str.replaceAll('-','')
        // stringi array'e çeviriyorum
        let arr = str.split('')
        
        // hepsi sayı mı kontrol ediyorum
        for (let i = 0; i < arr.length; i++) {
            if(!(arr[i].charCodeAt() <= 57 && arr[i].charCodeAt() >= 48)){
                return  false 
            }
        }
        
        // 16 haneli mi kontrol ediyorum
        if (arr.length !== 16) {
            return false
        }
      
        // son  rakam çift mi kontrol ediyorum
        if (+arr[(arr.length - 1)] % 2 != 0) {
            return false
        }

            
        //rakamların toplamı 16'dan büyük mü kontrol ediyorum
        let total= arr.reduce((total,num)=> {
            return total += (+num)
        },0)
        if(total < 16){
            return false
        }
       
        // en az iki farklı rakam var mı kontrol ediyorum
        if([...new Set(arr)].length == 1){
            return false
        }

        return true
}



// true test case's
console.log(isCreditCardNumberValid(9999777788880000))
console.log(isCreditCardNumberValid(6666666666661666))
// false test case's
console.log(isCreditCardNumberValid('a92332119c011112'))
console.log(isCreditCardNumberValid(4444444444444444))
console.log(isCreditCardNumberValid(1111111111111110))
console.log(isCreditCardNumberValid(6666666666666661))
// bonus 1 test case's
console.log(isCreditCardNumberValid('9999-7777-8888-0000'))
console.log(isCreditCardNumberValid('6666-6666-6666-1666'))

