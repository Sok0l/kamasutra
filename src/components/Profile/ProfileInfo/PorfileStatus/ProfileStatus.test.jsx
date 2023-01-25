import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props shold be in the state", () => {
    const component = create(<ProfileStatus status="Pam-param" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Pam-param");
  });

  test("After creation <input> shouldn`t be displayed", () => {
    const component = create(<ProfileStatus status="Pam-param" />);
    const root = component.root;

    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("After creation <span> should contains correct status", () => {
    const component = create(<ProfileStatus status="Pam-param" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("Pam-param");
  });

  test("input should be displayes in editMode instead of span", () => {
    const component = create(<ProfileStatus status="Pam-param" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");

    expect(input.props.value).toBe("Pam-param");
  });

  test("callbeck should be called", () => {
    const mockCallbeck = jest.fn();
    const component = create(
      <ProfileStatus status="Pam-param" updateStatus={mockCallbeck} />
    );
    const instanse = component.getInstance();
    instanse.deactivateEditMode();
    expect(mockCallbeck.mock.calls.length).toBe(1);
  });
});
