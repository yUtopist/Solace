export default function ErrorHandler(from, when) {
    // TODO
    // [ ] Way to reference where the error came from.
    // [ ] Some code system to identify errors.
    // [ ] Console description of the error.

    console.log('Error accured');
    console.log(`From: ${from}\nWhen: ${when}`);
    return <p className="error">Something went wrong!</p>;
}