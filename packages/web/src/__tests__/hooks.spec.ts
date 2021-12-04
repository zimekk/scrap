import { useState } from "react";
import { renderHook, act } from "@testing-library/react-hooks";

describe("hooks", () => {
  it("useState", () => {
    const { result } = renderHook(() => useState(true));
    expect(result.current[0]).toBe(true);
    act(() => {
      result.current[1](false);
    });
    expect(result.current[0]).toBe(false);
  });
});
