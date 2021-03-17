var i;
var a5=[];
var a10=[];
var a3=[];
for(i=1; i<=100; i++)
{
    if(i%7==0)
    {
       a5.push(i);
    
    }
        if(i%5==0)
        {
            a10.push(i);
        }


        if(i%3==0)
        {
            a3.push(i);
        }

}
    document.write(a5);
    document.write("<br>");
    document.write(a10);
    document.write("<br>");
    document.write(a3);