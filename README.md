# React Native useEffect Infinite Loop Bug

This repository demonstrates a common bug in React Native applications involving the `useEffect` hook.  The bug arises from omitting the dependency array in `useEffect`, resulting in an infinite loop that crashes the app.

## Bug Description
The provided code uses `useEffect` to fetch data.  Without a dependency array, the effect runs after every render, causing a continuous fetch cycle and subsequent re-renders, leading to a crash.

## Solution
The solution involves adding an empty dependency array `[]` to the `useEffect` hook to ensure it runs only once after the initial render.