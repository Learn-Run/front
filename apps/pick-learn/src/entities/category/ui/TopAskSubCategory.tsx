import { SubCategoryType } from '../api/types';

export default function TopAskSubCategory({ item }: { item: SubCategoryType }) {
    return (
        <ul>
            <li className='text-sm bg-point-green-200/20 text-point-green-200 rounded-full w-fit py-1 px-1.5 my-5'>
                {item.name}
            </li>
        </ul>
    );
}
