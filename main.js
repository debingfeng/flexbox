/**
 * Created by freddyfeng on 2016/1/3.
 */
$(document).ready(function(){
    var flexContent = $('#flexContent');
    // 改变flex-direction 或者 改变方向值
    $('#flex-direction,#direction').change(function () {
        var $this = $(this),
            val = $this.val(),
            target = $this.parent().parent().next();
        target.find('ul.flex-box').css('flex-direction',val);
    });

    // 改变flex-wrap 或者 wrap值
    $('#flex-wrap,#wrap').change(function () {
        var $this = $(this),
            val = $this.val(),
            target = $this.parent().parent().next();
        target.find('ul.flex-box').css('flex-wrap',val);
    });

    //改变子项目的对齐方式justify-content
    $('#justify-content').change(function () {
        var $this = $(this),
            val = $this.val(),
            target = $this.parent().parent().next();
        target.find('ul.flex-box').css('justify-content',val);

    });
    //改变子项目的对齐方式justify-content
    $('#align-items').change(function () {
        var $this = $(this),
            val = $this.val(),
            target = $this.parent().parent().next();
        target.find('ul.flex-box').css('align-items',val);

    });
    // 改变顺序
    $('#order').click(function () {
        //debugger;
        var box1 = $('#box1').val() ? $('#box1').val() : 1,
            box2 = $('#box2').val() ? $('#box2').val() : 2,
            box3 = $('#box3').val() ? $('#box3').val() : 3,
            box4 = $('#box4').val() ? $('#box4').val() : 4;
        var $this = $(this),
            target = $this.parent().parent().next();
        var obj = {};
        obj.box1 = box1;
        obj.box2 = box2;
        obj.box3 = box3;
        obj.box4 = box4;
        function order (object) {
            for (var i in object ){
                target.find("div."+ i).css("order",object[i]);
            }
        }
        order(obj);
    });

    // 改变flex- grow
    var flexGrow = $('#flex-grow');
    flexGrow.on('change','.js-grow-box',function () {
        var box = $(this).data('element'),
            range = $(this).val();
        flexGrow.find('div.grow-'+box).css("flex-grow",range);
    })
    // 改变flex-shrink
    var flexShrink = $('#flex-shrink');
    flexShrink.on('change','.js-grow-box',function () {

        var box = $(this).data('element'),
            range = $(this).val();
        flexShrink.find('div.shrink-'+box).css("flex-shrink",range);
    })
});
