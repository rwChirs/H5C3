## 绘制圆弧

  > 绘制圆弧

      context.arc(x, y, radius. startAngle. endAngle, anticlockwise)

      该方法用于绘制一段弧, 配合开始点的位置 与 stroke 方法或 fill 方法可以绘制扇形.
      方法中的前两个参数 x, y 表示绘制圆弧的圆心坐标.
      参数 radius 表示圆弧半径
      参数 startAngle 与 endAngle 表示开始到结束的角度. 角度以水平向右为 0 弧度, 顺时针为正方.
      参数 anticlockwise 表示是否采用默认的正向角度, 如果传入 true 表示逆指针为正. 该参数可选.
## 绘制文字

  > 描边文字

    context.strokeText( text, x, y)

  > 填充文字 

    context.fillText(text, x, y)

  > 计算文本尺寸

    context.measureText().width;

  > 设置文字字体和样式

    context.font = value  默认值为: 10px sans-serif

  > 设置字体水平对齐方式

    context.textAlign = value   该属性可以设置的值有: start( 默认 ), end, left, right, center.
  
  > 设置字体垂直对齐方式

    context.textBaseline = value  该属性可以取值: top, middle, bottom, hanging, alphabetic, ideographic 基于参考点的直线, 其中 top, middle, buttom 分别表示靠上, 居中, 靠下对齐.
## 绘制图像

  > 绘制简单图像

    不能直接再img这直接写src

    context.drawImage(img(src),dx(图片左上角的X轴坐标),dy(图片左上角的Y轴的坐标));


  > 指定区域大小绘制

    context.drawImage( img(图片), dx(图片左上角的X轴坐标), dy(图片左上角的Y轴的坐标), dWidth(绘制区域的宽度), dHeight(绘制区域的高度) )

  > 绘制任意图像

    context.drawImage( img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight )
## 变换

   所有变换都必须在绘制前去用 否则没有效果

  > 平移变换
     translate(x,y)

  > 旋转变换
    rotate(deg) //弧度

  > 缩放变换

    scale(sx,sy)
