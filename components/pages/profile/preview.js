import * as S from "./preview.styled";

const PreviewComponent = (props) => {
    if(props){
        return(
            <S.Preview>
                <div className="emptyContainer">
                    <img className="empty" src="/images/empty.svg" />
                    <label>پیش نمایش</label>
                    <span>هنوز المانی به صفحه اضافه نشده است</span>
                </div>
            </S.Preview>
        )
    }

    return(
        <S.Preview>
            
        </S.Preview>
    );
}

export default PreviewComponent;