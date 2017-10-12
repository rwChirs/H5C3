$(document).ready(function () {

    // $(".qbh-list .qbh-list-search-finish")没有运动
    var flag = false;   // 函数节流
    // $(".qbh-buy .qbh-buy-rotate-sofa") 没有运动
    var flag1 = false;

    var flag2 = false;

    $('#fullpage').fullpage({
        sectionsColor: ['#fadd67', '#84a2d4', '#ef674d', '#ffeedd', '#d04759', '#84d9ed', '#4fdded', '#4fdded'],
        navigation: true,
        // 滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算// 
        afterLoad: function (anchorLink, index) {
            // console.log(anchorLink,index);

            if (index == 1) {
                $(".down").fadeIn();
            }

            if (index == 2 && flag == false) {
                // 让 .qbh-list-search显示并且移动到电脑的中心
                $(".qbh-list .qbh-list-search").show().animate({
                    "right": 383
                }, 1000, function () {
                    $('.qbh-list .qbh-list-search-font').animate({
                        "opacity": 1
                    }, 1000, function () {
                        $('.qbh-list .qbh-list-search').hide();
                        $(".qbh-list .qbh-list-search-finish").show().animate({
                            "bottom": 449,
                            "right": 250,
                            "height": 30,
                            "left": 'none'
                        }, 1000, function () {
                            // $(".qbh-list .qbh-list-search-finish")运动完了
                            flag = true;
                        });

                        $(".qbh-list .qbh-list-sofas").show().animate({
                            "height": 218
                        }, 1000);
                        $(".qbh-list .qbh-list-wordb").animate({
                            "opacity": 1
                        }, function () {
                            $(".down").fadeIn();
                        });


                    });
                });
            }

            if (index == 8) {
                // 获取鼠标的位置
                $(document).mousemove(function (ev) {
                    // console.log(ev.pageX,ev.pageY);
                    var mX = ev.pageX-65;
                    var mY = ev.pageY + 2;
                    
                    $(".qbh-shopping .qbh-shopping-hands").css({
                        left: mX,
                        top: mY
                    })
                })

                $(".qbh-shopping  .qbh-shopping-start-shopping").mouseover(function () {
                    $(".qbh-shopping .qbh-shopping-dong").show();
                })

                // $(".qbh-shopping  .qbh-shopping-start-shopping").mouseout(function(){
                //     $(".qbh-shopping .qbh-shopping-dong").hide();
                // })

            }
        },
        // 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；
        // nextIndex 是滚动到的“页面”的序号，从1开始计算；
        // direction 判断往上滚动还是往下滚动，值是 up 或 down。        
        onLeave: function (index, nextIndex, direction) {
            // console.log(index,nextIndex,direction);

            // 只要出现离开该页面就把 继续向下隐藏
            $(".down").fadeOut();

            var wHeight = $(window).height();
            if (index == 2 && nextIndex == 3 && flag == true) { //如果它运动完了，才执行第二屏到第三屏的动画 
                $(".qbh-list .qbh-list-sofa-pic").show().animate({
                    // 掉下去的沙发的定位(bottom) = -(浏览器的高度-250)
                    "bottom": -(wHeight - 250),
                    "right": 518,
                    "width": 204
                }, 1000, function () {
                    $(".qbh-buy .qbh-buy-choose-end").animate({
                        "opacity": 1
                    });
                    $(".qbh-buy .qbh-buy-add-cart-end").animate({
                        "opacity": 1
                    }, function () {
                        $(".down").fadeIn();
                    });
                });
            }


            // 第三屏和第四屏动画
            if (index == 3 && nextIndex == 4 && flag1 == false) { //判断沙发是否是移动后的位置，如果不是再执行后面的代码（搜索框也是一样）
                // 之前从二屏掉到三屏的沙发隐藏
                $(".qbh-list .qbh-list-sofa-pic").hide();
                // 让倾斜沙发显示再从第三屏掉到第四屏
                $(".qbh-buy .qbh-buy-rotate-sofa").show().animate({
                    "bottom": -((wHeight - 250) + 50),
                    "right": 260
                }, 1000, function () {

                    flag1 = true; //bug2的解决
                    $(".qbh-buy .qbh-buy-sofa-pic").show();// 让运动完之后回到三屏，沙发也能够显示

                    // 假的沙发（上屏下来的）隐藏
                    $(".qbh-buy .qbh-buy-rotate-sofa").hide();
                    // 在四屏隐藏的沙发显示
                    $(".qbh-info .qbh-info-rotate-sofa").show();
                    $(".qbh-info .qbh-info-cart-box").animate({
                        "left": 2000    //小车向右飞走
                    }, 1500, function () {
                        $(".qbh-info .qbh-info-address").animate({
                            "opacity": 1
                        }, 1000, function () {
                            $(".qbh-info .qbh-info-wordb").animate({
                                "opacity": 1
                            })
                            $(".qbh-info .qbh-info-address-font").animate({
                                "opacity": 1
                            }, function () {
                                $(".down").fadeIn();
                            })
                        })
                    })
                })

            }

            // 第五屏动画
            if (index == 4 && nextIndex == 5) { //是第五屏动画，但是并没有离开它（onleave），所以是4，4一走，5就开始运行了

                $(".qbh-payment .qbh-payment-hands").show().animate({
                    "bottom": 0
                }, 1000, function () {
                    $('.qbh-payment .qbh-payment-mouse-end').animate({
                        "opacity": 1
                    }, 10, function () {

                        // 让顶部隐藏的沙发显示并掉入银行卡
                        $(".qbh-payment .qbh-payment-rotate-sofa-start").show().animate({
                            "bottom": 245
                        }, 800, function () {
                            $(".qbh-payment .qbh-payment-rotate-sofa-end").animate({
                                "bottom": 70
                            }, 500)

                            $(".qbh-payment .qbh-payment-bill").animate({
                                "bottom": 380
                            }, 500, function () {
                                $(".down").fadeIn();
                            })

                        })
                    })

                })
            }

            // 第五屏到第六屏的动画
            if (index == 5 && nextIndex == 6 && flag2 == false) {
                flag2 = true;
                
                $(".qbh-payment .qbh-payment-rotate-sofa-continue").show().animate({ //沙发运动
                    "bottom": -243,
                    "width": 80
                }, 900)
                $(".qbh-delivery .qbh-delivery-box ").show().animate({ //盒子运动
                    "left": 317,
                    "bottom": 435
                }, 800, function () {
                    $(".qbh-payment .qbh-payment-rotate-sofa-continue").hide();
                    $(".qbh-delivery .qbh-delivery-box ").animate({ //盒子接沙发（两者同时运动）后 的一起运动到卡车内
                        "left": 485,
                        "bottom": 56,
                        "width": 40
                    }, 800, function () {
                        $(".qbh-delivery .qbh-delivery-box ").hide();
                        $(".qbh-delivery").animate({    //走其实是背景（不是车）
                            "backgroundPositionX": '100%'
                        }, 2000, function () {
                            $(".qbh-delivery .qbh-delivery-font-end").animate({ //走到后标语改变
                                "opacity": 1
                            })
                            $(".qbh-delivery .qbh-delivery-deliveryman").animate({ //送货员出现
                                "width": 252,
                                "bottom": 117
                            }, 1000, function () {
                                $(".qbh-delivery .qbh-delivery-deliveryman").animate({ //送货员向右走一点
                                    "right": 600
                                }, 1000, function () {
                                    // flag2 = true;
                                    $(".qbh-delivery .qbh-delivery-shouhuo").show();
                                    $(".qbh-delivery .qbh-delivery-door").show();

                                    $(".qbh-delivery .qbh-delivery-buyer").animate({ //收货人出现
                                        "width": 87
                                    }, function () {
                                        $(".down").fadeIn();
                                    })
                                })
                            })
                        })

                        $(".qbh-delivery .qbh-delivery-shangjia").animate({
                            "opacity": 1
                        }, 800)
                        $(".qbh-delivery .qbh-delivery-truck-font").animate({
                            "opacity": 1
                        }, 1500)
                    })
                })
            }

            // 第六屏到第七屏动画
            if (index == 6 && nextIndex == 7) {

                $(".qbh-appraise .qbh-appraise-star").animate({
                    "width": 100
                }, 1500, function () {

                    $(".qbh-appraise .qbh-appraise-haoping").show().animate({
                        "left": 490
                    }, 1000, function () {
                        $(".qbh-appraise .qbh-appraise-haoping").animate({
                            "width": 72
                        }, 500, function () {
                            $(".down").fadeIn();
                        })
                    })
                })
            }

        }

    });
});