import { Color } from "components/utils/color";

export const DesktopFooter = () => {
    return(
        <>
            <p>
                DESKTOP FOOTER
            </p>
            <style jsx>{`
                p {
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

