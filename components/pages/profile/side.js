import { Icon } from "constants/icon";
import * as S from "./side.styled";

const SideComponent = () => {
    const navBar = [
        { icon: 'icon-dashboard', title: 'داشبورد', active: true },
        { icon: 'icon-template', title: 'قالب‌ها' },
        { icon: 'icon-chart', title: 'گزارش' },
        { icon: 'icon-settings', title: 'تنظیمات' },
    ];

    return(
        <S.Side>
            <S.UserInfo>
                <div className="avatar">
                    <Icon icon="icon-user" size={32} />
                </div>
                <div className="info">
                    <div className="name">
                        رضا نوروز زاده
                        <a>
                            <Icon icon="icon-edit" size={16} />
                        </a>
                    </div>
                    <div className="phone">
                        09371360717
                    </div>
                </div>
            </S.UserInfo>
            <S.Navbar>
                {
                    navBar.map((i, index) => {
                        return(
                            <S.Button active={i.active} key={index}>
                                <Icon icon={i.icon} size={24} />
                                <span>{i.title}</span>
                            </S.Button>
                        )
                    })
                }             
            </S.Navbar>
            <S.Banner>
                <img src="/images/banner.png" />
            </S.Banner>
            <S.Exit>
                <S.Button>
                    <Icon icon="icon-logout" size={24} />
                    <span>خروج</span>
                </S.Button> 
            </S.Exit>
        </S.Side>
    );
}

export default SideComponent;