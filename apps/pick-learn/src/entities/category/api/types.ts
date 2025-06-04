export interface MainCategoryType {
    id: number;
    name: string;
}

//FIXME:api 연결 시 수정 필요 (color추가 , maincategoryId 삭제)
export interface SubCategoryType {
    id: number;
    mainCategoryId: number;
    name: string;
}
