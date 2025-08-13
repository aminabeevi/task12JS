//*#*#
//*#*#
//*#*#
//*#*#

for(row=1;row<=4;row++){
    str=""
    for(col=1;col<=4;col++){
        if(col%2==0){
            str+="#"
        }
        else{
            str+="*"
        }
    }
    console.log(str)
}