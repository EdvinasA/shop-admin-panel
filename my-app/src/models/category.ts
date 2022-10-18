export interface CategoryForDisplay {
    categoryForDisplay: string;
    categoryForEnum: string;
    picture: string;
    subCategoryDisplay: SubCategoryDisplay[];
}

export interface SubCategoryDisplay {
    categoryForDisplay: string;
	categoryForEnum: string;
	picture: string;
}