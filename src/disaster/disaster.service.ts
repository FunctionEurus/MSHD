import { Injectable } from '@nestjs/common';
import { Info } from '../const';

@Injectable()
export class DisasterService {
    // 应该是在此处实现转换的逻辑
    constructor(private readonly info: Info) {}

    findTime(code: string) {
        // 13-26
        var sourcecode = code.substring(12, 26);
        var time = '';

        const year = parseInt(sourcecode.substring(0, 4));
        const month = parseInt(sourcecode.substring(4, 6)) - 1; // 0-based month
        const day = parseInt(sourcecode.substring(6, 8));
        const hours = parseInt(sourcecode.substring(8, 10));
        const minutes = parseInt(sourcecode.substring(10, 12));
        const seconds = parseInt(sourcecode.substring(12, 14));

        if (isNaN(year) || isNaN(month) || isNaN(day) || isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
            console.log("Invalid numeric values in the input string.");
            return null;
        }

        return new Date(year, month, day, hours, minutes, seconds);
    }

    findSource(code: string) {
        // 27,28,29
        var sourcecode = code.substring(26, 29);
        var source = '';
        if (sourcecode[0] === '1') {
            for (var i = 0; i < this.info.source_bussiness_code.length; i++) {
                if (this.info.source_bussiness_code[i] === sourcecode) {
                    source = this.info.source_bussiness_word[i];
                }
            }            
        }
        else if (sourcecode[0] === '2') {
            for (var i = 0; i < this.info.source_sense_code.length; i++) {
                if (this.info.source_sense_code[i] === sourcecode) {
                    source = this.info.source_sense_word[i];
                }
            }    
        }
        else if (sourcecode[0] === '3') {
            if (this.info.source_else_code[0] === sourcecode) {
                source = '其他';
            }              
        }
        else {
          source = '来源码错误';
        }

        return source;
    }

    findCarrier(code: string) {
        var carrier = '';
        if (code[29] === '0') {
            carrier = '文字';
        }
        else if (code[29] === '1') {
            carrier = '图像';
        }
        else if (code[29] === '2') {
            carrier = '音频';
        }
        else if (code[29] === '3') {
            carrier = '视频';
        }
        else if (code[29] === '4') {
            carrier = '其他';
        }
        return carrier;
    }

    findDisaster(code: string) {
        // 31,32,33
        var sourcecode = code.substring(30, 36);
        var info = '';
        if (sourcecode[0] === '1') {
            for (var i = 0; i < this.info.info_earthquake_code.length; i++) {
                if (this.info.info_earthquake_code[i] === sourcecode.substring(0, 3)) {
                    info += this.info.info_earthquake_word[i];
                }
            }
            for (var i = 0; i < this.info.indicator_earthquake_code.length; i++) {
                if (this.info.indicator_earthquake_code[i] === sourcecode.substring(3, 6)) {
                    info += this.info.indicator_earthquake_word[i];
                }
            }
        }
        else if (sourcecode[0] === '2') {
            for (var i = 0; i < this.info.info_people_code.length; i++) {
                if (this.info.info_people_code[i] === sourcecode.substring(0, 3)) {
                    info += this.info.info_people_word[i];
                }
            }
            for (var i = 0; i < this.info.indicator_people_code.length; i++) {
                if (this.info.indicator_people_code[i] === sourcecode.substring(3,6)) {
                    info += this.info.indicator_people_word[i];
                }
            }
        }
        else if (sourcecode[0] === '3') {
            for (var i = 0; i < this.info.info_house_code.length; i++) {
                if (this.info.info_house_code[i] === sourcecode.substring(0, 3)) {
                    info += this.info.info_house_word[i];
                }
            }
            for (var i = 0; i < this.info.indicator_house_code.length; i++) {
                if (this.info.indicator_house_code[i] === sourcecode.substring(3,6)) {
                    info += this.info.indicator_house_word[i];
                }
            }
        }
        else if (sourcecode[0] === '4') {
            for (var i = 0; i < this.info.info_lifeline_code.length; i++) {
                if (this.info.info_lifeline_code[i] === sourcecode.substring(0, 3)) {
                    info += this.info.info_lifeline_word[i];
                }
            }
            for (var i = 0; i < this.info.indicator_lifeline_code.length; i++) {
                if (this.info.indicator_lifeline_code[i] === sourcecode.substring(3,6)) {
                    info += this.info.indicator_lifeline_word[i];
                }
            }       
        }
        else if (sourcecode[0] === '5') {
            for (var i = 0; i < this.info.info_secondary_code.length; i++) {
                if (this.info.info_secondary_code[i] === sourcecode.substring(0, 3)) {
                    info += this.info.info_secondary_word[i];
                }
            }
            for (var i = 0; i < this.info.indicator_secondary_code.length; i++) {
                if (this.info.indicator_secondary_code[i] === sourcecode.substring(3,6)) {
                    info += this.info.indicator_secondary_word[i];
                }
            }
        }
        return info;
    }

    findOne(code: string) {
        var result = this.findTime(code) + this.findSource(code) + this.findCarrier(code) + this.findDisaster(code);
        return result;
    }
}
