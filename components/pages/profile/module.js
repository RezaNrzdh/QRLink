import { Icon } from "constants/icon";
import * as S from "./module.styled";

const ModuleComponent = () => {
    const basicModule = [
        {icon: "icon-link", title: "لینک"},
        {icon: "icon-text", title: "متن"},
        {icon: "icon-phone", title: "تلفن"},
        {icon: "icon-email", title: "ایمیل"},
        {icon: "icon-social", title: "شبکه‌های اجتماعی"},
        {icon: "icon-messenger", title: "پیام رسان‌ها"},
        {icon: "icon-location", title: "آدرس"}
    ];
    const proModule = [
        {icon: "icon-music", title: "موسیقی"},
        {icon: "icon-gallery", title: "تصویر"},
        {icon: "icon-video", title: "ویدئو"},
        {icon: "icon-gallery", title: "گالری تصاویر"},
        {icon: "icon-product", title: "محصول"}
    ];

    return(
        <S.Module>
            <label>ماژول‌های پایه</label>
            <div className="moduleContainer">
                {
                    basicModule.map((i, index) => {
                        return(
                            <S.Button key={index}>
                                <Icon icon={i.icon} size={24} />
                                <span>{i.title}</span>
                            </S.Button>
                        )
                    })
                }

            </div>
            <label>ماژول‌های حــرفـه‌ای</label>
            <div className="moduleContainer">
                {
                    proModule.map((i, index) => {
                        return(
                            <S.Button key={index}>
                                <Icon icon={i.icon} size={24} />
                                <span>{i.title}</span>
                            </S.Button>
                        )
                    })
                }

            </div>
        </S.Module>
    );
}

export default ModuleComponent;