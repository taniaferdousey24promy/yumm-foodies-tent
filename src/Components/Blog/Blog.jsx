import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>



            <h3>(a) When should you use context API?</h3>
            <p> Ans: When a large number of components at various nesting levels require access to a single piece of data, context is usually used. It makes component reuse more challenging, so use it carefully. Component composition is frequently a more straightforward option than context if all you want to do is avoid passing some props through a lot of layers.</p>
            <h3>(b)What is a custom hook?</h3>
            <p> Ans: A JavaScript function with the word "use" at the beginning and the ability to call other Hooks is known as a custom hook. I'm done now! You can extract code from a component into a function if you think doing so would be beneficial, either for reuse elsewhere or to keep the component simpler.
</p>
            <h3>(c)What is useRef?</h3>
            <p> Ans: The built-in React hook useRef(initialValue) receives one argument as the initial value and returns a reference (also known as a ref). An object with the unique property current is referred to as a reference.
</p>
            <h3>(d)What is useMemo?</h3>
            <p> Ans:A React Hook called useMemo enables you to cache a calculation's outcome in between re-renders. const calculateValue = useMemo(dependencies, cachedValue) Reference. Use Memo: Memo(CalculateValue, Dependencies)
</p>
        </div>
    );
};

export default Blog;