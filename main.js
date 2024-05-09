$(function () {
    var result = GetData();

});

function GetData() {
    var dataArray = [];
    var URL = 'https://script.google.com/macros/s/AKfycbxZiLo1eyZhBF9wtttOHhv-DBKUdQU82yIj71BmZkxmRG3GKteZjEzFyZcXWpUBv5uZ/exec';
    $.ajax({
        url: URL,
        type: 'GET',
        dataType: "json",
        error: function (xhr) {
            // result = false;
            // alert('�堺�堺嚗��䔄��罸𥲤隤支�嚗�隢钅�齿鰵�滩岫銝�甈∴��');
        },
        success: function (Jdata) {

            // �𠯫��鬹PI
            Date.prototype.Format = function (fmt) {
                var o = {
                    "M+": this.getMonth() + 1, //���遢 
                    "d+": this.getDate(), //�𠯫 
                    "h+": this.getHours(), //撠𤩺𧒄 
                    "m+": this.getMinutes(), //�� 
                    "s+": this.getSeconds(), //蝘� 
                    "q+": Math.floor((this.getMonth() + 3) / 3), //摮�漲 
                    "S": this.getMilliseconds() //瘥怎�� 
                };
                if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(
                    4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (
                        RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[
                        k]).length)));
                return fmt;
            }


            var Info = Jdata.user;
            console.log(Info);
            var i = 0;
            for (i = 0; Info.length > i; i++) {
                var Unit = Info[i].Unit; //�𤚗隢见鱓雿�
                var Applicant = Info[i].Applicant; //�𤚗隢衤犖
                var BorrowDate = Info[i].BorrowDate; //�毺鍂�𠯫���
                var StartTime = Info[i].StartTime; //�毺鍂�����(���)
                var EndTime = Info[i].EndTime; //�毺鍂�����(餈�)
                var Cause = Info[i].Cause; //�毺鍂鈭讠眏
    
                // ��硋�埈𠯫���
                var DateUse = Info[i].BorrowDate;
                var DateUse_old = new Date(DateUse).Format("yyyy-MM-dd");

                var d = new Date();
                var strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + (d.getDate());

                var index = i;
                var ind = Number(index);

                QQ();
                function QQ(){
                    if( Date.parse(strDate).valueOf() > Date.parse(BorrowDate).valueOf()){
                        delete ind;
                    }else{
                        $("tbody").append('<tr>' +
                            '<td class="w-15">' + Unit + '</td>' +
                            '<td class="w-15">' + Applicant + '</td>' +
                            '<td class="w-15">' + BorrowDate + '</td>' +
                            '<td class="w-15">' + StartTime + '</td>' +
                            '<td class="w-15">' + EndTime + '</td>' +
                            '<td class="w-25">' + Cause + '</td>' +
                            '</tr>'
                        );
                    }
                }

                
            }
            
            
        }  
    });
};


