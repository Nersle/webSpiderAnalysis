$('.uname,.topMenus').hover(function() {
  $('.topMenus').stop(true, true).fadeIn(200);
},
function() {
  $('.topMenus').stop(true, true).delay(500).fadeOut(200);
});

$('.ctnerTab a').click(function() {
  if (!$(this).hasClass('on')) {
    $('.ctnerTab a').removeClass('on').eq($(this).index()).addClass('on');
    $('.rtNavs').stop(true, true).hide(200).eq($(this).index()).show(300);
  }
});

$('.menusWrapper a').click(function() {
  if (!$(this).hasClass('active')) {
    $('.menusWrapper a').removeClass('active').eq($(this).index()).addClass('active');
    $('.cbox').stop(true, true).animate({
      top: 500
    },
    100).hide().eq($(this).index()).animate({
      top: 0
    },
    400).show();

    //by X
    if ($(this).hasClass('rd')) {
      var ticks = [2, 3, 4, 5, 6, 7];
      $.jqplot('chart1', [[12, 3, 45, 37, 23, 23]], {
        animate: true,

        //title:{text:'热度趋势', fontSize:'15px',color:'black'},
        axes: {
          yaxis: {
            min: -10,
            max: 50,
            drawMajorTickMarks: false,
          },
          xaxis: {
            ticks: ticks,
            renderer: $.jqplot.CategoryAxisRenderer,
            drawMajorGridlines: false,
            drawMinorGridlines: true,
            drawMajorTickMarks: false, 
            tickOptions: {
              showLabel: true,
              formatString: "$%'d",
              fontSize: '18px',
              //刻度值的字体大小 
              fontFamily: 'Tahoma',
              //刻度值上字体 
            }
          }
        },
        series: [{
          color: 'red',
          //renderer: $.jqplot.BarRenderer,
          pointLabels: {
            show: true
          },
          rendererOptions: { 
            animation: {
              speed: 2500
            },

            smooth: true
          }
        }],
        grid: {
          background: '#CAFF70',
        },

      });
      //bar:
      var ticks = ['腾讯', '网易', '新浪', 'twitter', 'Google+'];
      $.jqplot('chart2', [[[1, 12], [2, 5.12], [3, 34], [4, 13.1], [5, 39]]], {
        animate: true,

        //title:{text:'点击頻数', fontSize:'15px',color:'black'},
        axes: {
          yaxis: {
            min: 0,
            max: 50
          },
          xaxis: {
            min: 0,
            max: 5,
            renderer: $.jqplot.CategoryAxisRenderer,
            ticks: ticks,

            tickOptions: {
              fontSize: '14px',
              //刻度值的字体大小 
              fontFamily: 'sans-serif',
              //	 刻度值上字体 
            }
          }
        },
        series: [{
          color: '#B8860B',

          renderer: $.jqplot.BarRenderer,
          showMarkers: true,
          pointLabels: {
            show: true
          },
          showHighlight: false,

          rendererOptions: {
            // Speed up the animation a little bit.
            // This is a number of milliseconds.  
            // Default for bar series is 3000.  
            animation: {
              speed: 2500
            },
            barWidth: 25,
            barPadding: -15,
            barMargin: 0,
            titleMargin: 10,
            highlightMouseOver: false,
            smooth: true,
            //barDirection:'horizontal',
          }
        }]

      });

    }
    //end
  }
});
$('.smallPics a').click(function() {
  if (!$(this).hasClass('active')) {
    $('.smallPics a').removeClass('active').eq($(this).index()).addClass('active');
    $('.picLink').stop(true, true).removeClass('active').eq($(this).index()).addClass('active');
  }
});

$('.titleT').hover(function() {
  if (!$(this).hasClass('on')) {
    $('.titleT').removeClass('on').eq($(this).index()).addClass('on');
    $('.topicB').stop(true, true).hide().eq($(this).index()).show();
  }
});

var chart1 = new AwesomeChart('chartCanvas1');
chart1.chartType = "pie";
chart1.data = [51.62, 31.3, 10.06, 4.27, 1.96];
chart1.labels = ['微博', '论坛', '博客', '社交网络', '新闻'];
chart1.colors = ['#006CFF', '#FF6600', '#34A038', '#945D59', '#93BBF4'];
chart1.randomColors = true;
chart1.animate = true;
chart1.animationFrames = 80;
chart1.draw();