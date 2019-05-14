/**
 * Created by LannyCodes on 2019/5/11
 */
import {
    PixelRatio,
    Dimensions,
    Platform
} from 'react-native';

const {width, height} = Dimensions.get('window');

//通常以iPhone6尺寸为准
const baseWidth = 375;
const baseHeight = 665;
//获取宽高比例
const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const defaultPixel = 2;                           //iphone6的像素密度

const fontScale = PixelRatio.get() / PixelRatio.getFontScale();

//像素密度
const pixelRatio = PixelRatio.get();

/**
 * 通过给定设计稿尺寸返回真实的宽
 */
function rScreenWidth(sizePx) {
    //获取最近的尺寸
    let roundPixel = PixelRatio.roundToNearestPixel(sizePx);

    return Math.floor(scaleWidth * roundPixel / defaultPixel);
}

/**
 * 通过给定设计稿尺寸返回真实的高
 * @param sizePx
 */
function rScreenHeight(sizePx) {
    //获取最近的尺寸
    let roundPixel = PixelRatio.roundToNearestPixel(sizePx);

    return Math.floor(scaleHeight * roundPixel / defaultPixel);
}

/**
 * 通过给定设计稿尺寸返回真实的字体大小
 * @param sizepx
 */
function rFontScale(sizePx) {
    const size = rScreenWidth(sizePx);
    if (Platform.OS === 'ios') { // iOS禁用系统字体缩放需在Text属性加allowFontScaling={false}
        if (pixelRatio === 2) {
            // iphone 5s and older Androids

            if (width < 360) {

                return size * 0.95;

            }

            // iphone 5

            if (height < 667) {

                return size;

                // iphone 6-6s

            } else if (height >= 667 && height <= 735) {

                return size * 1;

            }

            // older phablets

            return size * 1;

        }

        if (pixelRatio === 3) {

            // catch larger devices

            // ie iphone 6s plus / 7 plus / mi note 等等

            return size * 1;

        }
    } else {
        return size;
    }

}

export default ScreenUtils = {
    rScreenWidth,
    rScreenHeight,
    rFontScale,
    width,
    height
}
