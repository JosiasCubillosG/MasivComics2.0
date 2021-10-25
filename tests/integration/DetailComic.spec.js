import { render, cleanup } from '@testing-library/vue';
import DetailComic from '@/views/DetailComic.vue';
import '@testing-library/jest-dom';
import { name as comicName, module as comicModule } from '@/store/modules/comics';

const renderView = () => {
    const store = {
        modules: {
            [comicName]: comicModule,
        },
    }
    return render(
        DetailComic,
        {
            store
        }
    )
};

describe('DetailComic view', () => {
    beforeEach(() => cleanup());

    test('Detail Comid to be in the document', () => {
        const { getByTestId } = renderView();
        const detailComic = getByTestId('detail-comic');
        expect(detailComic).toBeInTheDocument();
    })
})
