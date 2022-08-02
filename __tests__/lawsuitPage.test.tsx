import { render, fireEvent } from '@testing-library/react';
import Search from '../components/search/Search';

describe(Search, () => {
    it('should render the search text input', () => {
        const { getByPlaceholderText } = render(<Search />);

        expect(getByPlaceholderText('0000000-00.0000.0.00.0000'))
            .toBeInTheDocument;
    });

    it('should render the search button', () => {
        const { getByText } = render(<Search />);

        expect(getByText('Buscar')).toBeInTheDocument;
    });

    // it('should navigate to the lawsuit page when the search button is clicked', () => {
    //     const { getByText, getByRole } = render(<Search />);
    // });
});
