module.exports = {
    verbose: false,
    testURL: "http://localhost:8080/",
    collectCoverage: true,
    collectCoverageFrom: ["src/**"],
    coveragePathIgnorePatterns: ["/__snapshots__/"],
    transform: {
        "^.+\\.vue$": "vue-jest",
        "^.+\\.jsx?$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
            "jest-transform-stub"
    },
    moduleNameMapper: {
        "@/(.*)$": "<rootDir>/src/$1"
    },
    moduleFileExtensions: ["js", "vue"],
    snapshotSerializers: ["jest-serializer-vue"]
};
