import Link from 'next/link';
import * as S from './navigation.styled';

const Navigation = () => {
    return(
        <S.Unordered>
            <S.List>
                <Link href=''><a>تعرفه</a></Link>
            </S.List>
            <S.List>
                <Link href=''><a>درباره</a></Link>
            </S.List>
            <S.List>
                <Link href=''><a>تماس</a></Link>
            </S.List>
            <S.List>
                <Link href=''><a>سوالات متداول</a></Link>
            </S.List>
        </S.Unordered>
    );
}

export {Navigation};