import { Color } from "constants/color";

export const DesktopFooter = () => {
    return(
        <>
            <div>
                DESKTOP FOOTER
            </div>
            <style jsx>{`
                div {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    height: 200px;
                    background-color: ${Color.action.outlined};
                }
            `}</style>
        </>
    );
}

