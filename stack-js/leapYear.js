
//////  making function for choosing leap year......

function isLeapYear(year){
    let remainder = year%4
    if(remainder==0){
        if(year%100==0){
            let l1Year=year
            if(l1Year%400==0){
                console.log(year, 'is a Leap Year');
            }else{
                console.log(year,'is not a Leap Year');
            }
   }else{console.log(year, 'is Leap a Year');}
   }else{console.log(year, 'is not a Leap Year');}
   return year
}

isLeapYear(1700)
isLeapYear(2000)
isLeapYear(2002)
isLeapYear(2003)
isLeapYear(2010)
isLeapYear(2016)
isLeapYear(2018)
isLeapYear(2020)
isLeapYear(2022)
isLeapYear(2024)
isLeapYear(2040)
isLeapYear(2100)
isLeapYear(2550)