import { render, fireEvent, waitFor, cleanup } from '@testing-library/vue';
import ListComics from '@/views/ListComics.vue';
import '@testing-library/jest-dom';
import { name as comicName, module as comicModule } from '@/store/modules/comics';

const renderView = () => {
    const store = {
        modules: {
            [comicName]: comicModule,
        },
    }
    return render(
        ListComics,
        {
            store
        }
    )
};

describe('ListComics view', () => {
    beforeEach(() => cleanup());

    test('Comics Availables', () => {
        const { getByTestId } = renderView();
        const noComicsAvailables = getByTestId('no-comics__availables');
        expect(noComicsAvailables).toBeInTheDocument();
    })
})
