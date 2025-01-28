"use strict";

/**
 * Represents a Contact with a name, contact number and email address
 */

    class Contact {

        /**
         * Constructs a new Contact instance
         * @param fullName
         * @param emailAddress
         * @param subject
         * @param message
         */
        constructor(fullName = "", emailAddress = "",subject ="",message = "") {
            this._fullName = fullName;
            this._emailAddress = emailAddress;
            this._subject = subject;
            this._message = message;
        }

        /**
         * Get the full name of the contact
         * @returns {string}
         * @constructor
         */
        get fullName() {
            return this._fullName;
        }

        /**
         * Sets the full name of the contact. Validates input to ensure it's a non-empty string
         * @param fullName
         * @constructor
         */
        set fullName(fullName) {
            if (typeof fullName !== "string" || fullName.trim() === "") {
                throw new Error("Invalid fullName: must be non-empty string");
            }
            this._fullName = fullName;
        }


        /**
         * Gets the email address for the contact
         * @returns {string}
         * @constructor
         */
        get emailAddress() {
            return this._emailAddress;
        }

        /**
         * Sets the email address for the contact. Validate input to ensure a standard email format
         * @param address
         * @constructor
         */
        set emailAddress(address) {
            const emailRegex = /^[^\s@]+@[\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(address)) {
                throw new Error("Invalid email address: must be non-empty string");
            }
            this._emailAddress = address;
        }

        /**
         * Get the subject of the contact
         * @returns {string}
         * @constructor
         */
        get subject() {
            return this._subject;
        }

        /**
         * Sets the subject of the contact. Validates input to ensure it's a non-empty string
         * @param subject
         * @constructor
         */
        set subject(subject) {
            if (typeof subject !== "string" || subject.trim() === "") {
                throw new Error("Invalid subject: must be non-empty string");
            }
            this._subject = subject;
        }
        /**
         * Get the message of the contact
         * @returns {string}
         * @constructor
         */
        get message() {
            return this._message;
        }

        /**
         * Sets the full name of the contact. Validates input to ensure it's a non-empty string
         * @param message
         * @constructor
         */
        set message(message) {
            if (typeof message !== "string" || message.trim() === "") {
                throw new Error("Invalid message: must be non-empty string");
            }
            this._message = message;
        }
    }
