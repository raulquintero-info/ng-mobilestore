export interface ProductsPageable {
    content:          Content[];
    pageable:         Pageable;
    last:             boolean;
    totalElements:    number;
    totalPages:       number;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

interface Content {
    id:            number;
    name:          string;
    description:   string;
    image:         null | string;
    price:         number;
    quantity:      number;
    brand:         Brand;
    category:      Category;
    orderproducts: any[];
}

interface Brand {
    id:        number;
    brandname: string;
}

interface Category {
    id:        number;
    name:      string;
    position:  number;
    quantity:  number;
    isEnabled: boolean;
}

interface Pageable {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    unpaged:    boolean;
    paged:      boolean;
}

interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}
